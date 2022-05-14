const Utils = require('../helpers/Utils');
const connection = require('./Connection');

class Voter {
    set_new_voter(post_input, user_id) {
        let sql = "INSERT INTO users (name, email, type) VALUES (?, ?, ?)";
        let values = [post_input['name'], post_input['email'], post_input['type']];
        
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
}

module.exports = Voter;