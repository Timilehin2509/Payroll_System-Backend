const db = require('../config/dbConfig');

// Service to get all roles
exports.getAllRoles = async () => {
  const query = 'SELECT * FROM user_roles';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Service to create a new role
exports.createRole = async (roleName) => {
  const query = 'INSERT INTO user_roles (role_name) VALUES (?)';
  const result = await db.promise().query(query, [roleName]);
  return result[0];
};

// Service to update a role
exports.updateRole = async (id, roleName) => {
  const query = 'UPDATE user_roles SET role_name = ? WHERE id = ?';
  const result = await db.promise().query(query, [roleName, id]);
  return result[0];
};

// Service to delete a role
exports.deleteRole = async (id) => {
  const query = 'DELETE FROM user_roles WHERE id = ?';
  const result = await db.promise().query(query, [id]);
  return result[0];
};
