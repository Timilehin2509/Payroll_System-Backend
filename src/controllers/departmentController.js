const departmentService = require('../services/departmentService');

// Create a department
const createDepartment = async (req, res) => {
  const { department_name } = req.body;
  try {
    const department = await departmentService.addDepartment(department_name);
    res.status(201).json(department);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch all departments
const getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentService.fetchAllDepartments();
    res.status(200).json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createDepartment, getAllDepartments };
