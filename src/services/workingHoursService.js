const db = require('../config/dbConfig');

// Service to log working hours for an employee
exports.logWorkingHours = async (employeeId, hoursWorked, dateWorked) => {
  const query = 'INSERT INTO working_hours (employee_id, hours_worked, date_worked) VALUES (?, ?, ?)';
  const result = await db.promise().query(query, [employeeId, hoursWorked, dateWorked]);
  return result[0];
};

// Service to get working hours for an employee
exports.getWorkingHoursByEmployeeId = async (employeeId) => {
  const query = 'SELECT * FROM working_hours WHERE employee_id = ?';
  const [rows] = await db.promise().query(query, [employeeId]);
  return rows;
};

// Service to delete a working hour entry
exports.deleteWorkingHourEntry = async (id) => {
  const query = 'DELETE FROM working_hours WHERE id = ?';
  const result = await db.promise().query(query, [id]);
  return result[0];
};
