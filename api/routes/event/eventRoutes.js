const express = require("express");
const { eventController } = require("../../controllers/index");
const checkUser = require("../../middleware/checkUser");
const router = express.Router();

//event fetch
//event fetch
router
  .get("/search", checkUser, eventController.getAllEventsBySearch)
  .get("/notifications", checkUser, eventController.getAllNotifications)
  .post("/submiteventfeedback", checkUser, eventController.submitEventFeedback);

module.exports = router;
