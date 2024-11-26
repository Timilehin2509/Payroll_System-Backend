const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all audit logs (Admin only)
router.get('/', authMiddleware, roleMiddleware('System Administrator'), auditController.getAllAuditLogs);

// Route to create an audit log (System Admin)
router.post('/', authMiddleware, roleMiddleware('System Administrator'), auditController.createAuditLog);

// Route to delete an audit log (System Admin)
router.delete('/:id', authMiddleware, roleMiddleware('System Administrator'), auditController.deleteAuditLog);

module.exports = router;
