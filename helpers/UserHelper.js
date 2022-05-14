const User = require("../modals/User");
const FormValidation = require("./FormValidation");
const { get_new_password } = require("./Utils");
const Utils = require("./Utils");
const ejs = require('ejs');
const Email = require("./Email");

class UserHelper {

    async login_user(post_input, data) {
        const formValidation = new FormValidation(post_input);
        await formValidation.validateLoginForm();

        let email = post_input.email;
        let password = post_input.password;

        const user_modal = new User();

        const user_modal_response = await user_modal.get_user_info_for_login(email, password);
        console.log(user_modal_response.status);
        if(!user_modal_response.status) {
            data.status = 'error';
            data.errorMsg = user_modal_response.message;
            return ;
        }   

        data.status = 'success';
        data.successMsg = user_modal_response.message;
        return user_modal_response.user_info;
    } 

    async create_new_candidate(post_input, data) {

        post_input['type'] = 'voter';
        let user_model = new User();

        let user_already_exist = await user_model.check_user_already_exist(post_input['email']);
        if(user_already_exist) {
            data.success = 'error';
            data.errorMsg = "User already exist";
            return ;
        }
        let new_password = Utils.get_new_password();
        let hashed_password = Utils.getHashedPassword(new_password);
        post_input['password'] = hashed_password;
        let is_new_user_created = await user_model.set_new_user(post_input);

        if(!is_new_user_created) {
            data.success = 'error';
            data.errorMsg = "Please try again later.";
            return ;
        }

        data.success = 'success';
        data.successMsg = "Account successfully created. Please check you mail box!";

        let emailTemplate;
        await ejs.renderFile(process.env.PWD + '/views/mails/new_registration.ejs', {
            'full_name': post_input['full_name'],
            'email': post_input['email'],
            'password': new_password
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
            subject: "Registration successful",
            html: emailTemplate
        };
        const email_helper = new Email();
        const is_mail_sent = await email_helper.send_mail(mailOptions);

        return ;
    }
}

module.exports = UserHelper;