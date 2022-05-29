const Election = require("../modals/Election");

class ElectionHelper {
    async create_new_election(post_input, data) {
        const election_model = new Election();
        const election_id = await election_model.create_new_election(post_input);

        if(election_id == -1) {
            data.success = 'error';
            data.errorMsg = "Please try again later!";
            return ;
        }

        const is_candidate_ids_inserted = await election_model.add_candidates_by_election_id(post_input['candidates'], election_id);

        if(!is_candidate_ids_inserted) {
            data.success = "error";
            data.errorMsg = "Please try again later!";
            return ;
        }
        
        data.success = "success";
        data.successMsg = "New Election created successfully!";
    }

    async get_all_active_elections_by_constituency(constituency_id) {
        const election_model = new Election();
        const elections = await election_model.get_active_elections(constituency_id);

        return elections;
    }
}

module.exports = ElectionHelper;