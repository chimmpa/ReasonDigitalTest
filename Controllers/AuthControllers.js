const jwtDecode = require('jwt-decode');
const { createToken } = require('../util.js');

exports.login = (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body);

    if(username !== 'test' || password !== 'test'){
        res.status(403).json({
            message: 'Wrong username or password.'
        })
        next();
    }else{
        const userInfo = {_id: '1', username: 'test', email: 'test@test.com', role: 'user'};
        const token = createToken(userInfo);
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