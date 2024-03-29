const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const router = express.Router();
const {require_admin_login, user_info, is_already_logged_in} = require('../middlewares/auth');
const AdminDashboardHelper = require('../helpers/AdminDashboardHelper');
const { Validator } = require('node-input-validator');
const CandidateHelper = require('../helpers/CandidateHelper');
const ElectionHelper = require('../helpers/ElectionHelper');

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

router.get('', require_admin_login, (req, res) => {
    var data = {};
    data.js_files = [
        baseURL+'static/js/admin.js'
    ];
    data.view = 'admin/dashboard.ejs';
    res.render('template/template', data);
});

router.get('/login', is_already_logged_in, (req, res) => {
    var data = {};
    data.js_files = [
        baseURL+'static/js/admin.js'
    ];
    data.view = 'admin/login.ejs';
    res.render(template, data);
});

router.get('/create_election', require_admin_login, async (req, res) => {
    var data = {};
    data.js_files = [
        baseURL+'static/js/create_election.js'
    ];
    data.view = 'admin/create_election.ejs';
    const admin_dashboard_helper = new AdminDashboardHelper();
    data.constituencies = await admin_dashboard_helper.get_constituencies();
    res.render(template, data);
});

router.post('/create_election_submit', require_admin_login, async (req, res) => {
    var data = {};
    console.log(req.body);  
    var post_input = req.body;
    const election_helper = new ElectionHelper();
    await election_helper.create_new_election(post_input, data);
    res.json(data);
});

router.get('/get_candidates/:constituencyId', require_admin_login, async (req, res) => {
    var constituencyId = req.params.constituencyId;
    var data = {};
    const candidate_helper = new CandidateHelper();
    data.candidates = await candidate_helper.get_candidates(constituencyId);
    res.json(data);
});

router.get('/candidates', require_admin_login, async (req, res) => {
    var data = {};
    data.js_files = [
        baseURL+'static/js/candidate.js',
        baseURL+'static/js/admin.js'
    ];
    const admin_dashboard_helper = new AdminDashboardHelper();
    const candidate_helper = new CandidateHelper();
    data.constituencies = await admin_dashboard_helper.get_constituencies();
    data.candidates = await candidate_helper.get_all_candidates();
    data.view = 'admin/candidates.ejs';
    res.render(template, data);
});

router.post('/candidate_submit', require_admin_login, async (req, res) => {
    var data = {};
    const v = new Validator(req.body, {
        name: 'required',
        email: 'required|email',
        mobile_number: 'required',
        party_name: 'required',
        constituency: 'required'
    });
    const matched = await v.check();
    if(!matched) {
        data.status = 'validationError';
        data.validationErrors = v.errors;
        res.json(data);
        return ;
    }
    let post_input = req.body;
    const candidate_helper = new CandidateHelper();
    await candidate_helper.set_new_candidate(post_input, data);
    res.json(data);
});

module.exports = router;