const db = require('../config/dbConfig');

// Service to get all employees
exports.getAllEmployees = async () => {
  const query = 'SELECT * FROM employee';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Service to get a single employee by ID
exports.getEmployeeById = async (id) => {
  const query = 'SELECT * FROM employee WHERE id = ?';
  const [rows] = await db.promise().query(query, [id]);
  return rows[0];
};

// Service to create a new employee
exports.createEmployee = async (firstName, lastName, jobTitleId, departmentId, genderId, cityId, address, email, employmentStartDate) => {
  const query = 'INSERT INTO employee (first_name, last_name, job_title_id, department_id, gender_id, city_id, address, email, employment_start) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const result = await db.promise().query(query, [firstName, lastName, jobTitleId, departmentId, genderId, cityId, address, email, employmentStartDate]);
  return result[0];
};

// Service to update employee information
exports.updateEmployee = async (id, firstName, lastName, jobTitleId, departmentId, genderId, cityId, address, email, employmentStartDate) => {
  const query = 'UPDATE employee SET first_name = ?, last_name = ?, job_title_id = ?, department_id = ?, gender_id = ?, city_id = ?, address = ?, email = ?, employment_start = ? WHERE id = ?';
  const result = await db.promise().query(query, [firstName, lastName, jobTitleId, departmentId, genderId, cityId, address, email, employmentStartDate, id]);
  return result[0];
};

// Service to delete an employee
exports.deleteEmployee = async (id) => {
  const query = 'DELETE FROM employee WHERE id = ?';
  const result = await db.promise().query(query, [id]);
  return result[0];
};
