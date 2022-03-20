const User = require("../modals/User");
const FormValidation = require("./FormValidation");
const Utils = require("./Utils");

class UserHelper {

    async login_user(post_input, data) {
        const formValidation = new FormValidation(post_input);
        await formValidation.validateLoginForm();

        let email = post_input.email;
        let password = post_input.password;

        password = Utils.getHashedPassword(password);

        const user_modal = new User();

        const user_modal_response = await user_modal.get_user_info_for_login(email, password);
        
        if(!user_modal_response.status) {
            data.status = 'error';
            data.errorMsg = user_modal_response.message;
            return ;
        }   

        data.status = 'success';
        data.successMsg = user_modal_response.message;
        return user_modal_response.user_info;
    }  
}

module.exports = UserHelper;