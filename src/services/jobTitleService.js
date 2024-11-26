const db = require('../config/dbConfig');

// Service to get all job titles
exports.getAllJobTitles = async () => {
  const query = 'SELECT * FROM job_titles';
  const [rows] = await db.promise().query(query);
  return rows;
};

// Service to create a new job title
exports.createJobTitle = async (jobTitleName) => {
  const query = 'INSERT INTO job_titles (job_title_name) VALUES (?)';
  const result = await db.promise().query(query, [jobTitleName]);
  return result[0];
};

// Service to update a job title
exports.updateJobTitle = async (id, jobTitleName) => {
  const query = 'UPDATE job_titles SET job_title_name = ? WHERE id = ?';
  const result = await db.promise().query(query, [jobTitleName, id]);
  return result[0];
};

// Service to delete a job title
exports.deleteJobTitle = async (id) => {
  const query = 'DELETE FROM job_titles WHERE id = ?';
  const result = await db.promise().query(query, [id]);
  return result[0];
};
