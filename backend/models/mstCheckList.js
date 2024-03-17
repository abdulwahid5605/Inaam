const mongoose = require("mongoose");

const MstChecklistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dogHandler: {
    type: String,
    required: true,
  },
});

const MstChecklist = mongoose.model("MstChecklist", MstChecklistSchema);

module.exports = MstChecklist;
