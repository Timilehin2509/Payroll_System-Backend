const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all users (HR, Admin only)
router.get('/', authMiddleware, roleMiddleware('HR Manager', 'System Administrator'), userController.getAllUsers);

// Route to create a new user (HR Manager only)
router.post('/', authMiddleware, roleMiddleware('HR Manager'), userController.createUser);

// Route to update a user (HR Manager only)
router.put('/:id', authMiddleware, roleMiddleware('HR Manager'), userController.updateUser);

// Route to delete a user (HR Manager only)
router.delete('/:id', authMiddleware, roleMiddleware('HR Manager'), userController.deleteUser);

module.exports = router;
