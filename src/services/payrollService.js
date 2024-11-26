const db = require('../config/dbConfig');

// Service to get all payrolls
exports.getAllPayrolls = async () => {
  const query = 'SELECT * FROM salary_payment';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Service to create a new payroll entry
exports.createPayroll = async (employeeId, grossSalary, netSalary, salaryPeriod) => {
  const query = 'INSERT INTO salary_payment (employee_id, gross_salary, net_salary, salary_period) VALUES (?, ?, ?, ?)';
  const result = await db.promise().query(query, [employeeId, grossSalary, netSalary, salaryPeriod]);
  return result[0];
};

// Service to update payroll information
exports.updatePayroll = async (id, grossSalary, netSalary) => {
  const query = 'UPDATE salary_payment SET gross_salary = ?, net_salary = ? WHERE id = ?';
  const result = await db.promise().query(query, [grossSalary, netSalary, id]);
  return result[0];
};

// Service to delete a payroll entry
exports.deletePayroll = async (id) => {
  const query = 'DELETE FROM salary_payment WHERE id = ?';
  const result = await db.promise().query(query, [id]);
  return result[0];
};
