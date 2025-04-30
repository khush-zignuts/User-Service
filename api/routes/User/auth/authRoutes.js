const express = require("express");
const { authController } = require("../../../controllers/user/index");
const checkUser = require("../../../middleware/checkUser");
const router = express.Router();

//auth User
console.log("in auth controller log ");
router
  .post("/signup", authController.signup)
  .post("/verifyotp", authController.verifyOTP)
  .post("/login", authController.login)
  .post("/logout", checkUser, authController.logout);

module.exports = router;
