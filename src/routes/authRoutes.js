const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware } = require('../middleware/authMiddleware');

// Route for user login (authentication)
router.post('/login', authController.login);

// Route for refreshing the JWT token
router.post('/refresh-token', authController.refreshToken);

// Route for logout
router.post('/logout', authMiddleware, authController.logout);

module.exports = router;
