const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Validator } = require('node-input-validator');
const Utils = require('../helpers/Utils');
const router = express.Router();
const ejs = require('ejs');
const Email = require('../helpers/Email');
const { sendOtpToUser } = require('../helpers/OtpHelper');

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

router.get('/register', (req, res) => {
    var data = {};
    data.js_files = [
        baseURL + 'static/js/voter_register.js'
    ];
    data.view = 'voter/register.ejs';
    res.render('template/template', data);
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
            to: post_input['email'],
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