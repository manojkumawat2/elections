const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const UserHelper = require('../helpers/UserHelper');
const router = express.Router();

router.use(cookieParser());
router.use(session({
    secret: process.env.secret ? process.env.secret : "123654",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000,
    }
}));

router.get('', (req, res) => {
    var data = {};
    data.view = 'home.ejs';
    res.render('template/template', data);
});

router.post('/login', async (req, res) => {
    var data = {};
    let post_input = req.body;
    const user_helper = new UserHelper(req);
    const user_info = await user_helper.login_user(post_input, data);
    if(data.status == 'error') {
        res.json(data);
        return ;
    }
    req.session.user = user_info.id;
    req.session.role = user_info.type;
    res.json(data);
});

module.exports = router;