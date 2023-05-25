const express = require("express");
const router = express.Router();
// import all routes here
const birthdayRoute = require("./birthday");
const sipRoute = require("./sip");
const usersRoute = require("./users");

// call a speciafic routes file according to request url
router.use("/birthday", birthdayRoute);
router.use("/sip", sipRoute);
router.use("/users", usersRoute);

module.exports = router;
