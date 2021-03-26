const jwtDecode = require('jwt-decode');
//Get User data from token
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) {
      return res.status(401).json({ message: 'Authentication invalid'});
    }
    
    const decodedToken = jwtDecode(token);
    
    if(!decodedToken){
      return res.status(401).json({ message: 'There was a problem authorizing request'});
    } else {
      req.user = decodedToken;
      console.log(req.user);
      next();
    
    }
}