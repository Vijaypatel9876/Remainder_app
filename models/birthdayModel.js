const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const birthdaySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    birthdate: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    mobileNo: {
      type: String,
      required: [true, "Mobile number is required"],
    },
    // addedBy: {
    //   type: Number,
    //   required: [true, "Please Login first"],
    // },
    // addedOn: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
  { timestamps: true }
);
let Birthday = mongoose.model("birthdays", birthdaySchema);

module.exports = Birthday;
