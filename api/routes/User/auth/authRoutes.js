const express = require("express");
<<<<<<< HEAD
const { authController } = require("../../../controllers/user/index");
=======
const authController = require("../../../controllers/user/auth/authController");
>>>>>>> 6264777 (chnages)
const checkUser = require("../../../middleware/checkUser");
const router = express.Router();

//auth User

router
  .post("/signup", authController.signup)
  .post("/verifyotp", authController.verifyOTP)
  .post("/login", authController.login)
  .post("/logout", checkUser, authController.logout);

module.exports = router;
