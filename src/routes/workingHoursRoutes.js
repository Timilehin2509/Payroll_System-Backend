const express = require('express');
const router = express.Router();
const workingHoursController = require('../controllers/workingHoursController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all working hours records (HR Manager, Payroll Officer)
router.get('/', authMiddleware, roleMiddleware('HR Manager', 'Payroll Officer', 'System Administrator'), workingHoursController.getAllWorkingHours);

// Route to log working hours (Employee)
router.post('/', authMiddleware, roleMiddleware('Employee'), workingHoursController.logWorkingHours);

// Route to update working hours (HR Manager, Payroll Officer)
router.put('/:id', authMiddleware, roleMiddleware('HR Manager', 'Payroll Officer'), workingHoursController.updateWorkingHours);

// Route to delete working hours record (HR Manager, Payroll Officer)
router.delete('/:id', authMiddleware, roleMiddleware('HR Manager', 'Payroll Officer'), workingHoursController.deleteWorkingHours);

module.exports = router;
