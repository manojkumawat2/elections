const connection = require('./Connection');

class Otp {
    insert_new_otp(email, otp, type) {
        let sql = "INSERT INTO otps (email, otp, type) VALUES (?, ?, ?)";
        let values = [email, otp, type];
        
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

module.exports = Otp;