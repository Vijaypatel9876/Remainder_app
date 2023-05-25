const express = require("express");
const router = express.Router();
const {
  getAllsip,
  getSip,
  addSip,
  editSip,
  deleteSip,
} = require("../controllers/sipController");

router.route("/").get(getAllsip);
router.route("/get/:_id").get(getSip);
router.route("/add").post(addSip);
router.route("/edit/:_id").put(editSip);
router.route("/delete/:_id").delete(deleteSip);
module.exports = router;
