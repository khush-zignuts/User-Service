const express = require("express");
<<<<<<< HEAD
const { messageController } = require("../../../controllers/user/index");
=======
const messageController = require("../../../controllers/user/message/messageController");
>>>>>>> 6264777 (chnages)
const checkUser = require("../../../middleware/checkUser");

const router = express.Router();

// Send a message
<<<<<<< HEAD
// router.post("/send", checkUser, messageController.saveMessage);
router.post("/sendMessage", checkUser, messageController.sendMessage);

// Get all messages between two users
// router.get("get/:chatId", checkUser, messageController.getMessages);
router.get("get/:chatId", checkUser, messageController.getMessages);

// Delete a specific message
// router.delete("/:messageId", messageController.deleteMessage);

// Search messages between two users
// router.get("/search", messageController.searchMessages);

=======
router.post("/send", checkUser, messageController.sendMessage);

// Get all messages between two users
router.get("get/:chatId", checkUser, messageController.getMessages);

>>>>>>> 6264777 (chnages)
module.exports = router;
