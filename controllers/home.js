const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Validator } = require('node-input-validator');
const Utils = require('../helpers/Utils');
const router = express.Router();
const ejs = require('ejs');
const Email = require('../helpers/Email');
const { sendOtpToUser, validateOtp } = require('../helpers/OtpHelper');
const UserHelper = require('../helpers/UserHelper');
const {require_admin_login, user_info, is_already_logged_in} = require('../middlewares/auth');

const template = 'template/template';
const baseURL = 'http://localhost:8080/';

router.use(cookieParser());
router.use(session({
    secret: process.env.secret ? process.env.secret : "123654",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000,
    }
}));

router.get('', (req, res) => {
    var data = {};
    data.view = 'home.ejs';
    res.render('template/template', data);
});

router.get('/login', is_already_logged_in, async (req, res) => {
    var data = {};
    data.js_files = [
        baseURL + 'static/js/voter_login.js'
    ];
    
    data.constituencies = await Utils.get_constituencies();
    data.view = 'voter/login.ejs';
    res.render('template/template', data);
});

router.get('/register', is_already_logged_in, async (req, res) => {
    var data = {};
    data.js_files = [
        baseURL + 'static/js/voter_register.js'
    ];
    
    data.constituencies = await Utils.get_constituencies();
    data.view = 'voter/register.ejs';
    res.render('template/template', data);
});

router.post('/register_submit', async (req, res) => {
    var data = {};
    
    const post_input = req.body;
    const v = new Validator(req.body, {
        email: 'required|email',
        name: 'required',
        email_verification_code: 'required',
        mobile_number: 'required',
        aadhar: 'required',
        constituency: 'required'
    });
    const matched = await v.check();
    if(!matched) {
        data.success = 'error';
        data.status = 'validationError',
        data.validationErrors = v.errors,
        data.errorMsg = "All fields are mandatory.";
        res.json(data);
        return ;
    }
    console.log(post_input['otp']);
    otp_valid = await validateOtp(post_input['email'], post_input['email_verification_code']);
    if(!otp_valid) {
        data.success = 'error';
        data.errorMsg = 'Please enter a valid otp';
        res.json(data);
        return;
    }

    const user_helper = new UserHelper();

    await user_helper.create_new_candidate(post_input, data);
    res.json(data);
});

router.post('/new_otp', async (req, res) => {
    var data = {};
    const post_input = req.body;
    const v = new Validator(req.body, {
        email: 'required|email',
        type: 'required'
    });
    const matched = await v.check();
    if (!matched) {
        data.status = 'validationError';
        data.validationErrors = v.errors;
        res.json(data);
        return;
    }

    const otp = Utils.getOTP();
    const is_otp_saved = await sendOtpToUser(post_input['email'], otp, post_input['type']);

    if (is_otp_saved == false) {
        data.success = 'error';
        data.errorMsg = 'Please try again';
        res.json(data);
        return;
    }
    // Send mail with the otp to the user
    if (post_input['type'] === 'mail') {
        let emailTemplate;
        await ejs.renderFile(process.env.PWD + '/views/mails/verification_mail.ejs', {
            'otp': otp
        }, (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            emailTemplate = result;
        });
        let mailOptions = {
            from: 'programmingbyte@gmail.com',
            to: 'mkkumawat3333@gmail.com',
            subject: "Confirmation OTP for E-Votal Portal",
            html: emailTemplate
        };
        const email_helper = new Email();
        const is_mail_sent = await email_helper.send_mail(mailOptions);
        if (is_mail_sent) {
            data.success = 'success';
            data.successMsg = 'OTP sent successfully!';
        } else {
            data.success = 'error';
            data.errorMsg = 'Please try again';
        }
        res.json(data);
        return;
    } else if (post_input['type'] === 'sms') {

    }
    res.json(data);
});

module.exports = router;