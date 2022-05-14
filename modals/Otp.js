const connection = require('./Connection');

class Otp {
    insert_new_otp(email, otp, type = 'mail') {
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

    get_latest_otp_by_email_id(email, input_otp, type='mail') {
        let sql = "SELECT otp FROM otps WHERE email = ? AND otp = ? AND type = ?";
        let values = [email, input_otp,type];
        
        return new Promise(function(resolve, reject) {
            connection.query(sql, values, function(err, rows) {
                if(err) {
                    resolve(false);
                } else {
                    if(rows.length > 0) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            });
        });
    }

    set_all_opts_as_expire(email, type='mail') {
        let sql = "UPDATE otps SET status = ? WHERE email = ?";
        let values = ['expired', email];

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

    get_latest_otp_by_email(email) {
        let sql = "SELECT * FROM otps WHERE email = ? AND status = ? LIMIT 1";
        let values = [email, 'active'];

        return new Promise(function(resolve, reject) {
            connection.query(sql, values, function(err, rows) {
                if(err) {
                    console.log(err);
                    resolve(false);
                } else {
                    if(rows.length > 0) {
                        resolve(rows[0]);
                    } else {
                        resolve(false);
                    }
                }
            });
        })
    }
}

module.exports = Otp;