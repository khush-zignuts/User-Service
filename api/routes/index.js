const express = require("express");
const router = express.Router();
const authRoutes = require("./auth/authRoutes");
const eventRoutes = require("./event/eventRoutes");
const bookEventRoutes = require("./booking/bookEventroutes");
const chatRoutes = require("./chat/chatRoutes");

//authentication

router.use("/auth", authRoutes);

//event
router.use("/event", eventRoutes);

//booking
router.use("/book", bookEventRoutes);

//chat Routes
// router.use("/chat", chatRoutes);

module.exports = router;
