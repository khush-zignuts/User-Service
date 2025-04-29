const express = require("express");

const { chatController } = require("../../controllers/index");
const checkUser = require("../../middleware/checkUser");
const router = express.Router();

//booking create
router.post("/getOrCreateChatId", chatController.getorcreate);

module.exports = router;
