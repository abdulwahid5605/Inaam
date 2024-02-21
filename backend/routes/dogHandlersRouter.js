const express = require("express");

const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();
const {
  addDogHandler,
  updateDogHandler,
  deleteDogHandler,
  getDogHandlersByOrganizationId,
} = require("../controller/dogHandlerController");

router.post("/dogHandler/create", addDogHandler);

// Update a dog handler by ID
router.put("/dogHandler/update/:id", updateDogHandler);

// Delete a dog handler by ID
router.delete("/dogHandler/delete/:id", deleteDogHandler);

// Get all dog handlers by organization ID
router.get(
  "/dogHandler/getByOrgId/:organizationId",
  getDogHandlersByOrganizationId
);

module.exports = router;
