const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sipSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    amount: {
      type: String,
      required: true,
    },
    repeatInterval: {
      type: String,
      required: false,
    },
    remindBefore: {
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
let sip = mongoose.model("sip", sipSchema);

module.exports = sip;
