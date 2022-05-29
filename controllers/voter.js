const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { require_voter_login } = require('../middlewares/auth');
const Voter = require('../modals/Voter');
const Election = require('../modals/Election');
const router = express.Router();

const template = 'template/template';
const baseURL = 'http://localhost:8080/';

router.use(cookieParser());
router.use(session({
    secret: process.env.secret ? process.env.secret : "123654",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000,
    }
}));

router.get('', require_voter_login, async (req, res) => {
    var data = {};
    data.js_files = [
        baseURL+'static/js/admin.js'
    ];
    data.view = 'voter/dashboard.ejs';
    const voter_model = new Voter();
    const election_model = new Election();
    let voter = await voter_model.get_voter(res.locals.user_info.id);
    let elections = await election_model.get_active_elections(voter[0].constituency_id);
    data.elections = elections;
    res.render(template, data);
});

router.get('/vote/:election_id/:constituency_id', async (req, res) => {
    var data = {};
    data.js_files = [
        baseURL+'static/js/admin.js'
    ];
    data.view = 'voter/vote.ejs';
    const election_model = new Election();
    data.election = await election_model.get_election_details(req.params.election_id);
    data.candidates = await election_model.get_candidates(req.params.election_id);

    res.render(template, data);
})


module.exports = router;