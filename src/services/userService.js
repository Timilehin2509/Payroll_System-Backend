const db = require('../config/dbConfig');

// Service to get all users
exports.getAllUsers = async () => {
  const query = 'SELECT * FROM users';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Service to get a single user by ID
exports.getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const [rows] = await db.promise().query(query, [id]);
  return rows[0];
};

// Service to create a new user
exports.createUser = async (employeeId, username, passwordHash, roleId) => {
  const query = 'INSERT INTO users (employee_id, username, password_hash, role_id) VALUES (?, ?, ?, ?)';
  const result = await db.promise().query(query, [employeeId, username, passwordHash, roleId]);
  return result[0];
};

// Service to update user information
exports.updateUser = async (id, username, roleId) => {
  const query = 'UPDATE users SET username = ?, role_id = ? WHERE id = ?';
  const result = await db.promise().query(query, [username, roleId, id]);
  return result[0];
};

// Service to delete a user
exports.deleteUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = ?';
  const result = await db.promise().query(query, [id]);
  return result[0];
};
