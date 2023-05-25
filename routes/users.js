const express = require("express");
// load middleware from middleware folder
const { tokenValidation, createToken } = require("../middlewares/auth");

const router = express.Router();
// apply middleware on all route method using this
router.use(tokenValidation);

// import controller methods from controller
const {
  getAllUsers,
  userLogin,
  userSignup,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/usersController");
const { validate } = require("../models/birthdayModel");

// routes is here
router.route("/").get(getAllUsers);
router.route("/login").post(userLogin);
router.route("/signup").post(userSignup);

//if we want to apply middleware on single route method then use this
router.route("/getUser").get(tokenValidation, getUser);
router.route("/edit/:_id").put(editUser);
router.route("/delete/:_id").delete(deleteUser);

// export all route
module.exports = router;
