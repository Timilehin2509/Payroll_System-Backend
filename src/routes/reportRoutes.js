const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to generate payroll report (HR Manager, Payroll Officer, Admin)
router.get('/payroll', authMiddleware, roleMiddleware('HR Manager', 'Payroll Officer', 'System Administrator'), reportController.generatePayrollReport);

// Route to generate employee report (HR Manager)
router.get('/employees', authMiddleware, roleMiddleware('HR Manager', 'System Administrator'), reportController.generateEmployeeReport);

// Route to generate tax report (HR Manager)
router.get('/tax', authMiddleware, roleMiddleware('HR Manager', 'System Administrator'), reportController.generateTaxReport);

module.exports = router;
