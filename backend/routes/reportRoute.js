const express = require("express");
const router = express.Router();
const {
  addReport,
  getAllReportsByDogHandlerId,
  updateReport,
  deleteReport,
  getAllReportsByDogHandlerIdAndStatus,
} = require("../controller/reportController");
const { isAuthenticatedUser } = require("../middleware/auth");

// Add a new report
router.post("/reports", addReport);
router.put("/reports/:id", updateReport);

// Get all reports by dog handler ID
router.get(
  "/reports/doghandler/:dogHandlerId",
  isAuthenticatedUser,
  getAllReportsByDogHandlerId
);

router.get(
  "/reports/doghandler/:dogHandlerId/:isSent",
  isAuthenticatedUser,
  getAllReportsByDogHandlerIdAndStatus
);

// Update a report
router.put("/reports/:id", isAuthenticatedUser, updateReport);

// Delete a report
router.delete("/reports/:id", isAuthenticatedUser, deleteReport);

module.exports = router;
