# ReasonDigitalTest

To start server

1. npm install (This will add all node modules)
2. npm start (Will start server on http://localhost:3000 The port number can be changed in .env file)

API Routes

http://localhost:3000/api/auth/login -- This will take a post request. Which will require a username and password of test to be sent in the body.

http://localhost:3000/api/dino/get-all -- This will get all the data from the dino api but requires a authentication token received from the login route.
