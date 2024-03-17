const mongoose = require("mongoose");
// validator checks that the email is in correct format or not
const validator = require("validator");

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [30, "Name cannot exceed more then 30 characters"],
    minLength: [4, "Name should be more then 4 characters"],
  },
  geoTag: {
    type: String,
    required: true,
  },
  checkedItems: [
    {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
      },
      information: {
        type: String,
      },
    },
  ],

  dogHandler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DogHandler",
    required: true,
  },
  additionalInfo: {
    type: String,
    required: true,
  },
  isSent: {
    type: Boolean,
    default: false,
  },
  signed: {
    type: String,
  },
  organizationLogo: {
    type: String,
  },
  imageList: [
    {
      uri: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reports", reportSchema);
