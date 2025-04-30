const express = require("express");

const { chatController } = require("../../../controllers/user/index");
const checkUser = require("../../../middleware/checkUser");
const router = express.Router();

//booking create
router.post("/getOrCreateChatId", checkUser, chatController.getorcreate);

module.exports = router;
