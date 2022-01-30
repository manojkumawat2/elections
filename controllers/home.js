var express = require('express');
var router = express.Router();


router.get('', (req, res) => {
    var data = {};
    data.view = 'home.ejs';
    res.render('template/template', data);
});

module.exports = router;