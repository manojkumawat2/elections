const connection = require('./Connection');

class Constituency {
    get_list_of_constituencies() {
        let query = "SELECT * FROM constituencies";
        let values = [];
        return new Promise(function(resolve, reject) {
            connection.query(query, values, function(err, rows) {
                if(err) {
                    return resolve(null);
                }
                if(rows.length > 0) {
                    return resolve(rows);
                }
                return resolve(null);
            })
        });
    }
}

module.exports = Constituency;