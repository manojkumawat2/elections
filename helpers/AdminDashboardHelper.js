const Constituency = require("../modals/Constituency");

class AdminDashboardHelper {
    async get_constituencies() {
        const constituency_modal = new Constituency();
        let constituencies_list = await constituency_modal.get_list_of_constituencies();
        return constituencies_list;
    }
}

module.exports = AdminDashboardHelper;