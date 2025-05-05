const express = require("express");
<<<<<<< HEAD
const { eventController } = require("../../../controllers/user/index");
=======
const eventController = require("../../../controllers/user/event/eventController");
>>>>>>> 6264777 (chnages)
const checkUser = require("../../../middleware/checkUser");
const router = express.Router();

 
router
  .get("/search", checkUser, eventController.getAllEventsBySearch)
  .get("/notifications", checkUser, eventController.getAllNotifications)
  .post("/submiteventfeedback", checkUser, eventController.submitEventFeedback);

module.exports = router;
