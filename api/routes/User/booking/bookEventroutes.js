const express = require("express");

<<<<<<< HEAD
const { bookEventController } = require("../../../controllers/user/index");
=======
const bookEventController = require("../../../controllers/user/booking/BookEventController");
>>>>>>> 6264777 (chnages)

const checkUser = require("../../../middleware/checkUser");
const router = express.Router();

//booking create
router
  .post("/event", checkUser, bookEventController.bookEvent)
  .get(
    "/getAllBookedEventsOrById",
    checkUser,
    bookEventController.getAllBookedEventsOrById
  );

module.exports = router;
