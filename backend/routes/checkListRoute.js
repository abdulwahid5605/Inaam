const express = require("express");
const {
  getAllChecklistItems,
  addChecklistItem,
} = require("../controller/CheckListController");
const router = express.Router();

// Route to get all checklist items
router.get("/check_list", getAllChecklistItems);

// Route to add a new checklist item
router.post("/check_list", addChecklistItem);

module.exports = router;
