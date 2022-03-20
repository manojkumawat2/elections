const User = require("../modals/User");

var user_info = null;

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

const is_admin_already_logged_in = async (req, res, next) => {
    if(req.session.user && req.session.role && req.session.role === 'admin') {
        res.redirect('/admin');
        return ;
    }
    if(req.session.user && req.session.role && req.session.role === 'voter') {
        res.redirect('/');
        return ;
    }
    next();
}

module.exports = {
    require_admin_login: require_admin_login,
    is_admin_already_logged_in: is_admin_already_logged_in,
    user_info: user_info
}
