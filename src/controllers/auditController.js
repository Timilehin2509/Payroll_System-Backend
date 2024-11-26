const auditService = require('../services/auditService');

// Fetch all audit logs
const getAllAuditLogs = async (req, res) => {
  try {
    const logs = await auditService.fetchAllLogs();
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllAuditLogs };
