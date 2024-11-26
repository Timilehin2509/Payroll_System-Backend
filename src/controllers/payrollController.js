const payrollService = require('../services/payrollService');

// Create a new salary payment
const createSalaryPayment = async (req, res) => {
  const paymentData = req.body;
  try {
    const salaryPayment = await payrollService.addSalaryPayment(paymentData);
    res.status(201).json(salaryPayment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch all salary payments
const getAllSalaryPayments = async (req, res) => {
  try {
    const payments = await payrollService.fetchAllSalaryPayments();
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch salary payment by employee ID
const getSalaryPaymentByEmployeeId = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const payment = await payrollService.fetchSalaryPaymentByEmployeeId(employeeId);
    if (!payment) {
      return res.status(404).json({ message: 'Salary payment not found' });
    }
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createSalaryPayment, getAllSalaryPayments, getSalaryPaymentByEmployeeId };
