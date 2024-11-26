const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all roles (Admin only)
router.get('/', authMiddleware, roleMiddleware('System Administrator'), roleController.getAllRoles);

// Route to create a new role (Admin only)
router.post('/', authMiddleware, roleMiddleware('System Administrator'), roleController.createRole);

// Route to update a role (Admin only)
router.put('/:id', authMiddleware, roleMiddleware('System Administrator'), roleController.updateRole);

// Route to delete a role (Admin only)
router.delete('/:id', authMiddleware, roleMiddleware('System Administrator'), roleController.deleteRole);

module.exports = router;
