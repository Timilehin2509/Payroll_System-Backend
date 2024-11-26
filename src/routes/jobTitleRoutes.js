const express = require('express');
const router = express.Router();
const jobTitleController = require('../controllers/jobTitleController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

// Route to get all job titles (HR Manager)
router.get('/', authMiddleware, roleMiddleware('HR Manager', 'System Administrator'), jobTitleController.getAllJobTitles);

// Route to create a new job title (HR Manager)
router.post('/', authMiddleware, roleMiddleware('HR Manager'), jobTitleController.createJobTitle);

// Route to update a job title (HR Manager)
router.put('/:id', authMiddleware, roleMiddleware('HR Manager'), jobTitleController.updateJobTitle);

// Route to delete a job title (HR Manager)
router.delete('/:id', authMiddleware, roleMiddleware('HR Manager'), jobTitleController.deleteJobTitle);

module.exports = router;
