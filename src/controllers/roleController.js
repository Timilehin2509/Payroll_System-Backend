const roleService = require('../services/roleService');

// Get all roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.fetchAllRoles();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new role
const createRole = async (req, res) => {
  const { role_name } = req.body;
  try {
    const role = await roleService.addRole(role_name);
    res.status(201).json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllRoles, createRole };
