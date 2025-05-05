const express = require("express");

<<<<<<< HEAD
const { chatController } = require("../../../controllers/user/index");
=======
const chatController = require("../../../controllers/user/chat/chatController");
>>>>>>> 6264777 (chnages)
const checkUser = require("../../../middleware/checkUser");
const router = express.Router();

//booking create
router.post("/getOrCreateChatId", checkUser, chatController.getorcreate);

module.exports = router;
