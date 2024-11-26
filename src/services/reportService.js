const db = require('../config/dbConfig');

// Service to generate payroll report within a specific date range
exports.generatePayrollReport = async (startDate, endDate) => {
  const query = 'SELECT sp.*, e.first_name, e.last_name, e.email, e.job_title_id, e.department_id ' +
                'FROM salary_payment sp ' +
                'JOIN employee e ON sp.employee_id = e.id ' +
                'WHERE sp.salary_period BETWEEN ? AND ?';
  const [rows] = await db.promise().query(query, [startDate, endDate]);
  return rows;
};

// Service to generate employee report (basic employee details)
exports.generateEmployeeReport = async () => {
  const query = 'SELECT e.id, e.first_name, e.last_name, e.email, e.department_id, e.job_title_id, e.employment_start ' +
                'FROM employee e';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Service to generate department-specific report
exports.generateDepartmentReport = async (departmentId) => {
  const query = 'SELECT e.id, e.first_name, e.last_name, e.email, e.job_title_id ' +
                'FROM employee e WHERE e.department_id = ?';
  const [rows] = await db.promise().query(query, [departmentId]);
  return rows;
};

// Service to generate tax report based on salary range
exports.generateTaxReport = async (minSalary, maxSalary) => {
  const query = 'SELECT e.id, e.first_name, e.last_name, sp.gross_salary, sp.net_salary ' +
                'FROM employee e ' +
                'JOIN salary_payment sp ON e.id = sp.employee_id ' +
                'WHERE sp.gross_salary BETWEEN ? AND ?';
  const [rows] = await db.promise().query(query, [minSalary, maxSalary]);
  return rows;
};

// Service to generate role-based employee report
exports.generateRoleBasedReport = async (roleId) => {
  const query = 'SELECT e.id, e.first_name, e.last_name, e.email, e.job_title_id ' +
                'FROM employee e ' +
                'JOIN users u ON e.id = u.employee_id ' +
                'WHERE u.role_id = ?';
  const [rows] = await db.promise().query(query, [roleId]);
  return rows;
};
