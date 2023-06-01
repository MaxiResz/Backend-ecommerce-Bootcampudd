const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middleware/authentication');

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.get('/me', authMiddleware.authenticate, usersController.getMe);

module.exports = router;
