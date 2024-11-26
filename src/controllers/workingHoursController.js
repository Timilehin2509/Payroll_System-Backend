const workingHoursService = require('../services/workingHoursService');

// Controller to get all working hours
exports.getAllWorkingHours = async (req, res) => {
  try {
    const workingHours = await workingHoursService.getAllWorkingHours();
    res.status(200).json(workingHours);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching working hours', error });
  }
};

// Controller to log working hours for an employee
exports.logWorkingHours = async (req, res) => {
  try {
    const { employeeId, hoursWorked, date } = req.body;
    const workingHours = await workingHoursService.logWorkingHours(employeeId, hoursWorked, date);
    res.status(201).json(workingHours);
  } catch (error) {
    res.status(500).json({ message: 'Error logging working hours', error });
  }
};

// Controller to update working hours
exports.updateWorkingHours = async (req, res) => {
  try {
    const { id } = req.params;
    const { hoursWorked } = req.body;
    const updatedWorkingHours = await workingHoursService.updateWorkingHours(id, hoursWorked);
    res.status(200).json(updatedWorkingHours);
  } catch (error) {
    res.status(500).json({ message: 'Error updating working hours', error });
  }
};

// Controller to delete a working hours record
exports.deleteWorkingHours = async (req, res) => {
  try {
    const { id } = req.params;
    await workingHoursService.deleteWorkingHours(id);
    res.status(200).json({ message: 'Working hours deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting working hours', error });
  }
};
