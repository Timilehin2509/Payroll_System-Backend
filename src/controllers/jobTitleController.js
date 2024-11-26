const jobTitleService = require('../services/jobTitleService');

// Controller to get all job titles
exports.getAllJobTitles = async (req, res) => {
  try {
    const jobTitles = await jobTitleService.getAllJobTitles();
    res.status(200).json(jobTitles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job titles', error });
  }
};

// Controller to create a new job title
exports.createJobTitle = async (req, res) => {
  try {
    const { jobTitle } = req.body;
    const newJobTitle = await jobTitleService.createJobTitle(jobTitle);
    res.status(201).json(newJobTitle);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job title', error });
  }
};

// Controller to update a job title
exports.updateJobTitle = async (req, res) => {
  try {
    const { id } = req.params;
    const { jobTitle } = req.body;
    const updatedJobTitle = await jobTitleService.updateJobTitle(id, jobTitle);
    res.status(200).json(updatedJobTitle);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job title', error });
  }
};

// Controller to delete a job title
exports.deleteJobTitle = async (req, res) => {
  try {
    const { id } = req.params;
    await jobTitleService.deleteJobTitle(id);
    res.status(200).json({ message: 'Job title deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job title', error });
  }
};
