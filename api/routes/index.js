const express = require("express");
const router = express.Router();
const authRoutes = require("./auth/authRoutes");
const eventRoutes = require("./event/eventRoutes");
const bookEventRoutes = require("./booking/bookEventroutes");

//authentication

router.use("/auth", authRoutes);

//event
router.use("/event", eventRoutes);

//booking
router.use("/book", bookEventRoutes);

module.exports = router;
