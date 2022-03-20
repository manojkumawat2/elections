const bcrypt = require("bcryptjs");

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
}

module.exports = Utils;