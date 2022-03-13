var express = require('express');
var router = express.Router();


router.get('/register', (req, res) => {
    var data = {};
    data.view = 'register.ejs';
    data.thisStyle = 'register-style',
    res.render('template/template', data);
});

module.exports = router;