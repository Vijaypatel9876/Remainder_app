const express = require("express");
const router = express.Router();

const {
  getAllbirthday,
  getBirthday,
  addBirthday,
  editBirthday,
  deleteBirthday,
} = require("../controllers/birthdayController");

router.route("/").get(getAllbirthday);
router.route("/get/:_id").get(getBirthday);
router.route("/add").post(addBirthday);
router.route("/edit/:_id").put(editBirthday);
router.route("/delete/:_id").delete(deleteBirthday);
module.exports = router;
