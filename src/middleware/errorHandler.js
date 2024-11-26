// Middleware to handle errors centrally
exports.errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
      // Handle validation errors (e.g., missing fields, incorrect data types)
      return res.status(400).json({ message: err.message });
    }
  
    if (err.name === 'UnauthorizedError') {
      // Handle authorization errors (e.g., invalid token)
      return res.status(401).json({ message: 'Unauthorized access.' });
    }
  
    // Generic error handler for unknown errors
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong, please try again later.' });
  };
  