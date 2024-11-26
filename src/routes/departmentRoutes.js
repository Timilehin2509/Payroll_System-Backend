const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all departments (HR Manager)
router.get('/', authMiddleware, roleMiddleware('HR Manager', 'System Administrator'), departmentController.getAllDepartments);

// Route to create a new department (HR Manager)
router.post('/', authMiddleware, roleMiddleware('HR Manager'), departmentController.createDepartment);

// Route to update a department (HR Manager)
router.put('/:id', authMiddleware, roleMiddleware('HR Manager'), departmentController.updateDepartment);

// Route to delete a department (HR Manager)
router.delete('/:id', authMiddleware, roleMiddleware('HR Manager'), departmentController.deleteDepartment);

module.exports = router;
