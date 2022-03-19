const Candidate = require("../modals/Candidate");

class CandidateHelper {
    constructor() {

    }
    
    async set_new_candidate(post_input, data) {
        const candidate_model = new Candidate();
        const is_candidate_inserted = await candidate_model.set_candidate(post_input, data);
        
        if(is_candidate_inserted) {
            data.success = 'success';
            data.successMsg = 'Candidate Added Successfully.';
            return ;
        } else {
            data.success = 'error';
            data.errorMsg = 'There is an issue in the backend system. Please try again later.';
            return ;
        }
    }

    async get_all_candidates() {
        const candidate_model = new Candidate();
        let candidates = await candidate_model.get_all_candidates();
        return candidates ?? [];
    }
}

module.exports = CandidateHelper;