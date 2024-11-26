const express = require('express');
const router = express.Router();
const payrollController = require('../controllers/payrollController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all payroll records (HR Manager, Payroll Officer)
router.get('/', authMiddleware, roleMiddleware('HR Manager', 'Payroll Officer', 'System Administrator'), payrollController.getAllPayrollRecords);

// Route to create payroll record (Payroll Officer)
router.post('/', authMiddleware, roleMiddleware('Payroll Officer'), payrollController.createPayrollRecord);

// Route to update payroll record (Payroll Officer)
router.put('/:id', authMiddleware, roleMiddleware('Payroll Officer'), payrollController.updatePayrollRecord);

// Route to delete payroll record (Payroll Officer)
router.delete('/:id', authMiddleware, roleMiddleware('Payroll Officer'), payrollController.deletePayrollRecord);

module.exports = router;
