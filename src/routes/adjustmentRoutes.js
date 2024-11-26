const express = require('express');
const router = express.Router();
const adjustmentController = require('../controllers/adjustmentController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all adjustments (Payroll Officer, HR Manager)
router.get('/', authMiddleware, roleMiddleware('Payroll Officer', 'HR Manager', 'System Administrator'), adjustmentController.getAllAdjustments);

// Route to create a new adjustment (Payroll Officer)
router.post('/', authMiddleware, roleMiddleware('Payroll Officer'), adjustmentController.createAdjustment);

// Route to update an adjustment (Payroll Officer)
router.put('/:id', authMiddleware, roleMiddleware('Payroll Officer'), adjustmentController.updateAdjustment);

// Route to delete an adjustment (Payroll Officer)
router.delete('/:id', authMiddleware, roleMiddleware('Payroll Officer'), adjustmentController.deleteAdjustment);

module.exports = router;
