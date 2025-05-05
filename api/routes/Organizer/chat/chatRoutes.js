const express = require("express");

<<<<<<< HEAD
const { chatController } = require("../../../controllers/organizer/index");
=======
const chatController = require("../../../controllers/organizer/chat/chatController");
>>>>>>> 6264777 (chnages)
const checkOrganizer = require("../../../middleware/checkOrganizer");
const router = express.Router();

//booking create
router.post("/getOrCreateChatId", checkOrganizer, chatController.getorcreate);

module.exports = router;
