const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
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

router.get('', (req, res) => {
    var data = {};
    data.js_files = [
        baseURL+'static/js/admin.js'
    ];
    data.view = 'admin/dashboard.ejs';
    res.render(template, data);
});


module.exports = router;