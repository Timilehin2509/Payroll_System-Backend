// Middleware to check if the user has the required role(s)
exports.checkRole = (roles) => {
    return (req, res, next) => {
      const userRole = req.user?.role;
      
      if (!userRole) {
        return res.status(403).json({ message: 'No role found for the user.' });
      }
  
      // If the user has one of the required roles, proceed
      if (roles.includes(userRole)) {
        return next();
      } else {
        return res.status(403).json({ message: 'Insufficient role permissions.' });
      }
    };
  };
  