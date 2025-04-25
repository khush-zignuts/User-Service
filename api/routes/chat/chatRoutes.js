const express = require("express");

const checkUser = require("../../middleware/checkUser");
const checkOrganizer = require("../../../middleware/checkOrganizer");
const { chatController } = require("../../controllers/index");
const router = express.Router();

//booking create
router.post("/with", checkUser, chatController.bookEvent);

module.exports = router;
