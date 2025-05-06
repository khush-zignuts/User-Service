const express = require("express");
const eventController = require("../../../controllers/user/event/eventController");
const checkUser = require("../../../middleware/checkUser");
const router = express.Router();

 
router
  .get("/search", checkUser, eventController.getAllEventsBySearch)
  .get("/notifications", checkUser, eventController.getAllNotifications)
  .post("/submiteventfeedback", checkUser, eventController.submitEventFeedback);

module.exports = router;
