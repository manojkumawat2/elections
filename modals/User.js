const Utils = require('../helpers/Utils');
const connection = require('./Connection');

class User {
    check_user_already_exist(email) {
        let query = "SELECT * FROM users WHERE email = ?";
        let values = [email];

        return new Promise(function(resolve, reject) {
            connection.query(query, values, function(err, rows) {
                if(err) {
                    console.log(err);
                    return resolve(true);
                }
                if(rows.length > 0) {
                    return resolve(true);
                }
                return resolve(false);
            })
        });
    }

    set_new_user(post_input) {
        let sql = "INSERT INTO users (name, email, password, type) VALUES (?, ?, ?, ?)";
        let values = [post_input['name'], post_input['email'], post_input['password'], post_input['type']];
        
        return new Promise(function(resolve, reject) {
            connection.query(sql, values, function(err, rows) {
                if(err) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        });
    }

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