const express = require("express");
const router = express.Router();
const authRoutes = require("./auth/authRoutes");

//authentication
router.use("/auth", authRoutes);

module.exports = router;
