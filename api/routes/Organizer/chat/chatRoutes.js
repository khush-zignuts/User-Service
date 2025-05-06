const express = require("express");

const chatController = require("../../../controllers/organizer/chat/chatController");
const checkOrganizer = require("../../../middleware/checkOrganizer");
const router = express.Router();

//booking create
router.post("/getOrCreateChatId", checkOrganizer, chatController.getorcreate);

module.exports = router;
