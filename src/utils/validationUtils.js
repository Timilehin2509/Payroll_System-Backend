const Joi = require('joi');

// Example of input validation for employee data
const employeeSchema = Joi.object({
  first_name: Joi.string().min(2).max(50).required(),
  last_name: Joi.string().min(2).max(50).required(),
  date_of_birth: Joi.date().required(),
  email: Joi.string().email().required(),
  employment_start: Joi.date().required(),
  job_title_id: Joi.number().integer().required(),
  department_id: Joi.number().integer().required(),
  gender_id: Joi.number().integer().required(),
  city_id: Joi.number().integer().required(),
});

// Validate employee data
exports.validateEmployee = (data) => {
  const { error } = employeeSchema.validate(data);
  if (error) {
    throw new Error(error.details[0].message);
  }
};

// Example for validation of salary payment
const salaryPaymentSchema = Joi.object({
  employee_id: Joi.number().integer().required(),
  gross_salary: Joi.number().precision(2).positive().required(),
  net_salary: Joi.number().precision(2).positive().required(),
  salary_period: Joi.date().required(),
});

exports.validateSalaryPayment = (data) => {
  const { error } = salaryPaymentSchema.validate(data);
  if (error) {
    throw new Error(error.details[0].message);
  }
};
