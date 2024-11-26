const adjustmentService = require('../services/adjustmentService');

// Controller to get all adjustments
exports.getAllAdjustments = async (req, res) => {
  try {
    const adjustments = await adjustmentService.getAllAdjustments();
    res.status(200).json(adjustments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching adjustments', error });
  }
};

// Controller to create a new adjustment
exports.createAdjustment = async (req, res) => {
  try {
    const { employeeId, adjustmentAmount, adjustmentType } = req.body;
    const adjustment = await adjustmentService.createAdjustment(employeeId, adjustmentAmount, adjustmentType);
    res.status(201).json(adjustment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating adjustment', error });
  }
};

// Controller to update an adjustment
exports.updateAdjustment = async (req, res) => {
  try {
    const { id } = req.params;
    const { adjustmentAmount, adjustmentType } = req.body;
    const adjustment = await adjustmentService.updateAdjustment(id, adjustmentAmount, adjustmentType);
    res.status(200).json(adjustment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating adjustment', error });
  }
};

// Controller to delete an adjustment
exports.deleteAdjustment = async (req, res) => {
  try {
    const { id } = req.params;
    await adjustmentService.deleteAdjustment(id);
    res.status(200).json({ message: 'Adjustment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting adjustment', error });
  }
};
