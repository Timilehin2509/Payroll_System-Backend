const db = require('../config/dbConfig');

// Service to log audit information
exports.logAudit = async (userId, action, details) => {
  const query = 'INSERT INTO audit_logs (user_id, action, details, timestamp) VALUES (?, ?, ?, NOW())';
  const result = await db.promise().query(query, [userId, action, details]);
  return result[0];
};

// Service to get all audit logs
exports.getAllAuditLogs = async () => {
  const query = 'SELECT * FROM audit_logs';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Service to get audit logs by user ID
exports.getAuditLogsByUserId = async (userId) => {
  const query = 'SELECT * FROM audit_logs WHERE user_id = ?';
  const [rows] = await db.promise().query(query, [userId]);
  return rows;
};
