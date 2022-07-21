var UserService = require('../services/user.service') 

exports.signup = async function (req, res, next) {
    
    var user = req.body;
    console.log(user)
    try {
        var token = await UserService.signup({}, user)
        return res.status(200).json({ status: true, token: token });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
