require('dotenv').config();
const ejwt = require('express-jwt');
//Verify token
module.exports = ejwt({
  secret: process.env.ACCESS_TOKEN_SECRET,
  issuer: 'domain.com',
  audience: 'domain.com',
  algorithms: ['HS256']
});