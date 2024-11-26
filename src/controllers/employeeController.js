const employeeService = require('../services/employeeService');

// Add a new employee
const createEmployee = async (req, res) => {
  const employeeData = req.body;
  try {
    const employee = await employeeService.addEmployee(employeeData);
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.fetchAllEmployees();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch employee by ID
const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await employeeService.fetchEmployeeById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createEmployee, getAllEmployees, getEmployeeById };
