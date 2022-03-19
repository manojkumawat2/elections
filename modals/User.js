const Utils = require('../helpers/Utils');
const connection = require('./Connection');

class User {
    get_user_info_by_user_id(user_id) {
        let query = "SELECT * FROM users WHERE id = ?";
        let values = [user_id];

        return new Promise(function(resolve, reject) {
            connection.query(query, values, function(err, rows) {
                if(err) {
                    return resolve(null);
                }
                if(rows.length > 0) {
                    return resolve(rows[0]);
                }
                return resolve(null);
            })
        });
    }

    get_user_info_for_login(email, password) {
        let query = "SELECT * FROM users WHERE email = ?";
        let values = [email];

        return new Promise(function(resolve, reject) {
            connection.query(query, values, function(err, rows) {
                let result = {};
                if(err) {
                    result.status = false;
                    result.message = "Please try again later.";
                } else {
                    if(rows.length > 0) {

                        let is_password_match = Utils.comparePassword(password, rows[0].password);
                        
                        if(true) {
                            result.status = true;
                            result.message = "Login Successfully.";
                            result.user_info = rows[0];
                        } else {
                            result.status = false;
                            result.message = "Please enter a valid login email or password.";
                        }
                    } else {
                        result.status = false;
                        result.message = "Please enter a valid login email or password.";
                    }
                }
                resolve(result);
            });
        });
    }
}

module.exports = User;