const Utils = require('../helpers/Utils');
const connection = require('./Connection');

class Voter {
    set_new_voter(post_input, user_id) {
        let sql = "INSERT INTO voters (user_id, mobile_number, aadhar_number, constituency_id, is_verified) VALUES (?, ?, ?, ?, ?)";
        let values = [user_id, post_input['mobile_number'], post_input['aadhar'], post_input['constituency'], 1];
        
        return new Promise(function(resolve, reject) {
            connection.query(sql, values, function(err, rows) {
                if(err) {
                    console.log(err);
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        });
    }

    get_voter(user_id) {
        let query = "SELECT * FROM voters WHERE user_id = ?";
        let values = [user_id];
        return new Promise(function (resolve, reject) {
            connection.query(query, values, function (err, rows) {
                if (err) {
                    return resolve(null);
                }
                if (rows.length > 0) {
                    return resolve(rows);
                }
                return resolve(null);
            })
        });
    }
}

module.exports = Voter;