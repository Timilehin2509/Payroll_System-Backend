const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const { connect } = require('./config/dbConfig'); // Import the DB connection setup

const app = express();

// Configure dotenv to load environment variables
dotenv.config();

// Middleware setup
app.use(cors());          // Enable CORS for cross-origin requests
app.use(helmet());        // Security headers for protection
app.use(express.json());  // Parse incoming JSON requests

// Test the database connection
connect(); // Check if DB connection is successful on server startup

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const payrollRoutes = require('./routes/payrollRoutes');
const reportRoutes = require('./routes/reportRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const jobTitleRoutes = require('./routes/jobTitleRoutes');
const adjustmentRoutes = require('./routes/adjustmentRoutes');
const workingHoursRoutes = require('./routes/workingHoursRoutes');
const auditRoutes = require('./routes/auditRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/job-titles', jobTitleRoutes);
app.use('/api/adjustments', adjustmentRoutes);
app.use('/api/working-hours', workingHoursRoutes);
app.use('/api/audit', auditRoutes);

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
