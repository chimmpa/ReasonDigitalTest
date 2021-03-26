const jwtDecode = require('jwt-decode');
// Get User data from token
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    // Check for a token
    if(!token) {
      return res.status(401).json({ message: 'Authentication invalid'});
    }
    
    // Decode and log token data
    const decodedToken = jwtDecode(token);
    
    if(!decodedToken){
      return res.status(401).json({ message: 'There was a problem authorizing request'});
    } else {
      req.user = decodedToken;
      console.log(req.user);
      next();
    
    }
}