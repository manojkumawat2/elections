const connection = require('./Connection');

class Candidate {
    set_candidate(post_input) {
        let sql = "INSERT INTO nominated_candidates (name, email, mobile_number, constituency_id, party_name) VALUES (?, ?, ?, ?, ?)";
        let values = [post_input['name'], post_input['email'], post_input['mobile_number'], post_input['constituency'], post_input['party_name']];
        
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

    update_candidate(post_input) {
        let sql = "UPDATE nominated_candidates SET name = ?, email = ?, mobile_number = ?, constituency_id = ?, party_name = ? WHERE id = ?";
        let values = [post_input['name'], post_input['email'], post_input['mobile_number'], post_input['constituency'], post_input['party_name'], post_input['candidate_id']];
        
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

    get_all_candidates() {
        let query = "SELECT nominated_candidates.*, constituencies.name as constituency_name FROM nominated_candidates INNER JOIN constituencies ON nominated_candidates.constituency_id = constituencies.id";
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

    get_candidates(constituencyId) {
        let query = "SELECT nominated_candidates.id, nominated_candidates.name as candidate_name FROM nominated_candidates WHERE nominated_candidates.constituency_id = ?";
        let values = [constituencyId];
        return new Promise(function(resolve, reject) {
            connection.query(query, values, function(err, rows) {
                if(err) {
                    console.log(err);
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

module.exports = Candidate;