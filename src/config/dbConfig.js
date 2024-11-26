const mysql = require('mysql2/promise');

// Create the connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to connect to the database
async function connect() {
  try {
    await pool.getConnection();
    console.log('Successfully connected to the database.');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process with failure if database connection fails
  }
}

// Gracefully shut down the database connection pool
async function shutdown() {
  try {
    await pool.end();
    console.log('Database connection pool closed.');
  } catch (error) {
    console.error('Error closing the database connection pool:', error);
  }
}

module.exports = { pool, connect, shutdown };
