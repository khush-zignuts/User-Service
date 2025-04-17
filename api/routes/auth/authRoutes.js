const express = require("express");
const { authController } = require("../../controllers/index");
const checkUser = require("../../middleware/checkUser");
const router = express.Router();

//auth User
router.post("/signup", authController.signup);
router.post("/verifyotp", authController.verifyOTP);
router.post("/login", authController.login);
router.post("/logout/:userId", checkUser, authController.logout);

module.exports = router;
