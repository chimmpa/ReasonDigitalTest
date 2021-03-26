const express = require('express');

const authController = require('../Controllers/AuthControllers');

const router = express.Router();

// POST => localhost:3000/api/auth/login
router.post('/login', authController.login);

module.exports = router;