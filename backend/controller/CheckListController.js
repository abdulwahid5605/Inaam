const MstChecklist = require("../models/mstCheckList");

// Controller function to get all checklist items
exports.getAllChecklistItems = async (req, res) => {
  try {
    const checklistItems = await MstChecklist.find();
    res.json(checklistItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to add a new checklist item
exports.addChecklistItem = async (req, res) => {
  const { name, dogHandler } = req.body;

  try {
    const newChecklistItem = new MstChecklist({ name, dogHandler });
    await newChecklistItem.save();
    res
      .status(201)
      .json({
        message: "Checklist item added successfully",
        checklistItem: newChecklistItem,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
