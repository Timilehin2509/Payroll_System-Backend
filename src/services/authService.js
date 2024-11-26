const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig');
const { jwtSecret } = require('../config/jwtSecret');

// Service to hash password
exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Service to compare password
exports.comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Service to generate JWT token
exports.generateToken = (user) => {
  const payload = {
    userId: user.id,
    roleId: user.role_id,
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};

// Service to authenticate user
exports.authenticateUser = async (username, password) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  const result = await db.promise().query(query, [username]);
  if (result[0].length === 0) throw new Error('User not found');
  const user = result[0][0];
  const validPassword = await this.comparePassword(password, user.password_hash);
  if (!validPassword) throw new Error('Invalid password');
  return user;
};
