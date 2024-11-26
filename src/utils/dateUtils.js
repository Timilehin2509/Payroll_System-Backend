const moment = require('moment');

// Format a date into YYYY-MM-DD format
exports.formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
};

// Parse a date string and check if it's valid
exports.parseDate = (dateString) => {
  const date = moment(dateString, 'YYYY-MM-DD', true);
  if (!date.isValid()) {
    throw new Error('Invalid date format. Expected YYYY-MM-DD.');
  }
  return date;
};
