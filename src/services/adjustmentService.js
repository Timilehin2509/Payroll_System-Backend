const db = require('../config/dbConfig');

// Service to create a salary adjustment
exports.createAdjustment = async (employeeId, adjustmentAmount, adjustmentType, effectiveDate) => {
  const query = 'INSERT INTO salary_adjustments (employee_id, adjustment_amount, adjustment_type, effective_date) VALUES (?, ?, ?, ?)';
  const result = await db.promise().query(query, [employeeId, adjustmentAmount, adjustmentType, effectiveDate]);
  return result[0];
};

// Service to get all adjustments for an employee
exports.getAdjustmentsByEmployeeId = async (employeeId) => {
  const query = 'SELECT * FROM salary_adjustments WHERE employee_id = ?';
  const [rows] = await db.promise().query(query, [employeeId]);
  return rows;
};

// Service to delete an adjustment
exports.deleteAdjustment = async (id) => {
  const query = 'DELETE FROM salary_adjustments WHERE id = ?';
  const result = await db.promise().query(query, [id]);
  return result[0];
};
