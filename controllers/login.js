var express = require('express');
var router = express.Router();


router.get('/login', (req, res) => {
    var data = {};
    data.view = 'login.ejs';
    data.thisStyle = 'login',
    res.render('template/template', data);
});

module.exports = router;