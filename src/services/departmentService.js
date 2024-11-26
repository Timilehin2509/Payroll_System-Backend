const db = require('../config/dbConfig');

// Service to get all departments
exports.getAllDepartments = async () => {
  const query = 'SELECT * FROM departments';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Service to create a new department
exports.createDepartment = async (departmentName) => {
  const query = 'INSERT INTO departments (department_name) VALUES (?)';
  const result = await db.promise().query(query, [departmentName]);
  return result[0];
};

// Service to update a department
exports.updateDepartment = async (id, departmentName) => {
  const query = 'UPDATE departments SET department_name = ? WHERE id = ?';
  const result = await db.promise().query(query, [departmentName, id]);
  return result[0];
};

// Service to delete a department
exports.deleteDepartment = async (id) => {
  const query = 'DELETE FROM departments WHERE id = ?';
  const result = await db.promise().query(query, [id]);
  return result[0];
};
