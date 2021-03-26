const jwtDecode = require('jwt-decode');
const { createToken } = require('../util.js');

exports.login = (req, res, next) => {
    // Get data from request body
    const { username, password } = req.body;
    console.log(req.body);

    // Test if username or password is incorrect
    if(username !== 'test' || password !== 'test'){
        return res.status(403).json({
            message: 'Wrong username or password.'
        })
    }else{
        //Create a token using hard coded user info
        const userInfo = {_id: '1', username: 'test', email: 'test@test.com', role: 'user'};
        const token = createToken(userInfo);
        // Add expiry time to the end of the token
        const decodedToken = jwtDecode(token);
        const expiresAt = decodedToken.exp;
        res.json({
        message: 'Authentication successful!',
        token,
        userInfo,
        expiresAt
        });
    }   
}