const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
let User = mongoose.model("users", userSchema);

module.exports = User;
