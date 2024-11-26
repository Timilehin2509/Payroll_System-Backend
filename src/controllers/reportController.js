const reportService = require('../services/reportService');

// Generate payroll report
const generatePayrollReport = async (req, res) => {
  try {
    const report = await reportService.generatePayrollReport();
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Generate employee report
const generateEmployeeReport = async (req, res) => {
  try {
    const report = await reportService.generateEmployeeReport();
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { generatePayrollReport, generateEmployeeReport };
