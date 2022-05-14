const User = require("../modals/User");

var user_info = null;

const require_voter_login = async (req, res, next) => {
    if(!req.session.user) {
        res.redirect('/login');
        return ;
    }
    if(req.session.role == 'admin') {
        res.redirect('/admin');
        return ;
    }

    let user_id = req.session.user;

    const user = new User();

    user_info = await user.get_user_info_by_user_id(user_id);

    if(!user_info || user_info['type'] != 'voter') {
        req.session.destroy();
        res.redirect('/login');
        return ;
    }
    res.locals.user_info = user_info;

    next();
}

const require_admin_login = async (req, res, next) => {
    if(!req.session.user) {
        res.redirect('/admin/login');
        return ;
    }
    if(req.session.role == 'voter') {
        res.redirect('/');
        return ;
    }

    let user_id = req.session.user;
    
    const user = new User();
    user_info = await user.get_user_info_by_user_id(user_id);
    if(!user_info || user_info['type'] != 'admin') {
        req.session.destroy();
        res.redirect('/');
        return ;
    }
    res.locals.user_info = user_info;
    next();
}

const is_already_logged_in = async (req, res, next) => {
    if(req.session.user && req.session.role && req.session.role === 'admin') {
        res.redirect('/admin');
        return ;
    }
    if(req.session.user && req.session.role && req.session.role === 'voter') {
        res.redirect('/voter');
        return ;
    }
    next();
}

module.exports = {
    require_admin_login: require_admin_login,
    is_already_logged_in: is_already_logged_in,
    user_info: user_info,
    require_voter_login: require_voter_login
}
