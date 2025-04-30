const express = require("express");
const { messageController } = require("../../../controllers/user/index");
const checkUser = require("../../../middleware/checkUser");

const router = express.Router();

// Send a message
// router.post("/send", checkUser, messageController.saveMessage);
router.post("/sendMessage", checkUser, messageController.sendMessage);

// Get all messages between two users
// router.get("get/:chatId", checkUser, messageController.getMessages);
router.get("get/:chatId", checkUser, messageController.getMessages);

// Delete a specific message
// router.delete("/:messageId", messageController.deleteMessage);

// Search messages between two users
// router.get("/search", messageController.searchMessages);

module.exports = router;
