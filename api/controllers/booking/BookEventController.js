const generateUUID = require("../../utils/generateUUID");

const { HTTP_STATUS_CODES } = require("../../../config/constant");
const { Booking, Event } = require("../../models/index");

module.exports = {
  bookEvent: async (req, res) => {
    try {
      const userId = req.user.id;
      const eventId = req.query.eventId;
      console.log("eventId: ", eventId);

      // Fetch event to get organiserId
      const event = await Event.findOne({
        where: { id: eventId, isDeleted: false },
        attributes: ["id", "organiserId"],
      });
      console.log("event: ", event);

      if (!event) {
        return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({
          status: HTTP_STATUS_CODES.NOT_FOUND,
          message: "Event not found.",
          data: "",
          error: "EVENT_NOT_FOUND",
        });
      }

      // Check if booking already exists
      const existingBooking = await Booking.findOne({
        where: {
          userId: userId,
          eventId: eventId,
        },
        attributes: ["id"],
      });

      if (existingBooking) {
        if (existingBooking.status === "booked") {
          return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
            status: HTTP_STATUS_CODES.BAD_REQUEST,
            message: "You have already booked this event.",
            data: "",
            error: "DUPLICATE_BOOKING",
          });
        } else if (existingBooking.status === "cancelled") {
          return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
            status: HTTP_STATUS_CODES.BAD_REQUEST,
            message:
              "The event booking was previously cancelled by the organiser.",
            data: "",
            error: "BOOKING_CANCELLED",
          });
        } else if (existingBooking.status === "pending") {
          return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
            status: HTTP_STATUS_CODES.BAD_REQUEST,
            message: "Your booking for this event is still pending.",
            data: "",
            error: "BOOKING_PENDING",
          });
        }
      }
      const bokkindId = generateUUID();

      let newBooking = {
        id: bokkindId,
        userId: userId,
        eventId: eventId,
        organiserId: event.organiserId,
        status: "pending",
      };

      // Create booking
      await Booking.create(newBooking);

      return res.status(HTTP_STATUS_CODES.CREATED).json({
        status: HTTP_STATUS_CODES.CREATED,
        message: "Event booked successfully. Awaiting confirmation.",
        data: newBooking,
        error: "",
      });
    } catch (error) {
      console.error("Book Event Error:", error.message);
      return res.status(HTTP_STATUS_CODES.SERVER_ERROR).json({
        status: HTTP_STATUS_CODES.SERVER_ERROR,
        message: "Failed to book event.",
        data: "",
        error: error.message || "SERVER_ERROR",
      });
    }
  },
};
