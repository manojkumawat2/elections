const connection = require('./Connection');

class Election {
    create_new_election(post_input) {
        let sql = "INSERT INTO elections (title, constituency_id, description, start_date, end_date) VALUES (?, ?, ?, ?, ?)";
        let values = [post_input['title'], post_input['constituency'], post_input['description'], post_input['start_time'], post_input['end_time']];

        return new Promise(function (resolve, reject) {
            connection.query(sql, values, function (err, rows) {
                if (err) {
                    console.log(err);
                    resolve(-1);
                } else {
                    resolve(rows.insertId);
                }
            });
        });
    }

    add_candidates_by_election_id(candidates, election_id) {
        let sql = "INSERT INTO election_candidates (election_id, candidate_id) VALUES ?";
        let values = [];
        candidates.forEach(candidate_id => {
            values.push([election_id, candidate_id]);
        });

        return new Promise(function (resolve, reject) {
            connection.query(sql, [values], function (err, rows) {
                if (err) {
                    console.log(err);
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        });
    }

    get_active_elections(constituency_id) {
        let query = "SELECT * FROM elections WHERE constituency_id = ?";
        let values = [constituency_id];
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

    get_election_details(election_id) {
        let query = "SELECT * FROM elections WHERE election_id = ?";
        let values = [election_id];
        return new Promise(function (resolve, reject) {
            connection.query(query, values, function (err, rows) {
                if (err) {
                    return resolve(null);
                }
                if (rows.length > 0) {
                    return resolve(rows[0]);
                }
                return resolve(null);
            })
        });
    }

    get_candidates(election_id) {
        let query = "SELECT * FROM election_candidates INNER JOIN nominated_candidates ON nominated_candidates.id = election_candidates.candidate_id WHERE election_id = ?";
        let values = [election_id];
        return new Promise(function (resolve, reject) {
            connection.query(query, values, function (err, rows) {
                if (err) {
                    console.log(err);
                    return resolve(null);
                }
                if (rows.length > 0) {
                    console.log(rows);
                    return resolve(rows);
                }
                return resolve(null);
            })
        });
    }
}

module.exports = Election;