const bcrypt = require("bcryptjs");
const Constituency = require("../modals/Constituency");

class Utils {
    static getHashedPassword(password) {
        //generate salt to hash the password
        let salt = bcrypt.genSaltSync(10);
        //hash the password
        let hash = bcrypt.hashSync(password, salt);
        return hash
    }

    static comparePassword(password1, password2) {
        let is_password_match = bcrypt.compareSync(password1, password2);
        return is_password_match;
    }

    static getOTP() {
        return Math.floor(Math.random()*1000000);
    }
    
    static get_new_password() {
        var randomPassword = Math.random().toString(36).slice(-8);
        return randomPassword;
    }

    static async get_constituencies() {
        const constituency_modal = new Constituency();
        let constituencies_list = await constituency_modal.get_list_of_constituencies();
        return constituencies_list;
    }
}

module.exports = Utils;