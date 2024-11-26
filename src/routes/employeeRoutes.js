const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all employees (HR Manager)
router.get('/', authMiddleware, roleMiddleware('HR Manager', 'System Administrator'), employeeController.getAllEmployees);

// Route to create a new employee (HR Manager)
router.post('/', authMiddleware, roleMiddleware('HR Manager'), employeeController.createEmployee);

// Route to update an employee (HR Manager)
router.put('/:id', authMiddleware, roleMiddleware('HR Manager'), employeeController.updateEmployee);

// Route to delete an employee (HR Manager)
router.delete('/:id', authMiddleware, roleMiddleware('HR Manager'), employeeController.deleteEmployee);

module.exports = router;
