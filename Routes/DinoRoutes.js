const express = require('express');

const dinoController = require('../Controllers/DinoControllers');

const checkJwt = require('../middleware/checkJwt');
const attachUser = require('../middleware/attachUser');

const router = express.Router();

// GET => localhost:3000/api/dino/get-all
router.get('/get-all', attachUser, checkJwt, dinoController.getAll);

module.exports = router;