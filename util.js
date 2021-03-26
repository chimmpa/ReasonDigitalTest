require('dotenv').config();

const jwt = require('jsonwebtoken');

const createToken = user => {
  //Sign the JWT
  if (!user.role) {
    throw new Error('No user role specified');
  }
  return jwt.sign(
    {
      sub: user._id,
      email: user.email,
      role: user.role,
      iss: 'domain.com', //enter domain
      aud: 'domain.com' //enter audience
    },
    process.env.ACCESS_TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
};

module.exports = {
  createToken
};