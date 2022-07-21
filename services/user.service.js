let userModel = require('../models/user')
const jwt = require('jsonwebtoken');

exports.signup = async function (query, user) {
    try {
        const accessTokenSecret = 'youraccesstokensecret';

        // Filter user from the users array by username and password
        let userData = userModel.exists({ username: user.username,  password: user.password })
        console.log('userData in signup '+userData)
    
        if (userData) {
            // Generate an access token
            const accessToken = jwt.sign({ username: user.username,  password: user.password }, accessTokenSecret);
    
            return accessToken;
        } else {
            userData = new userModel(user)
            await userData.save(userData);
            const accessToken = jwt.sign({ username: user.username,  password: user.password }, accessTokenSecret);
    
            return accessToken;
        }
    } catch (e) {
        console.log(e)
        // Log Errors
        throw Error('Unable to signup. Try again.')
    }
}