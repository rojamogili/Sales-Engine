// const signature = require('cookie-signature');

const config = require('../env/config_dev');

module.exports = function(req, res, next) {
    // let bisToken = 's:' + signature.sign(req.sessionID, config.session_secret);
    // if(req.session.data && req.session.data.access) {
    //     res.render('index', Object.assign({}, {
    //         user: req.session.data.user,
    //         access_token: req.session.data.access
    //     }));
    // } else {
        res.render('index', {});
    // }
}
