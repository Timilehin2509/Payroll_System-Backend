const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../services/authService');
const jwtSecret = require('../config/jwtSecret');

// Login controller
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authService.authenticateUser(username, password);
    const token = jwt.sign({ id: user.id, role_id: user.role_id }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = { login };
