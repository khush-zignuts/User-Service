const express = require("express");

const authController = require("./auth/AuthController");
const eventController = require("./event/EventController");
const bookEventController = require("./booking/BookEventController");
const chatController = require("./chat/chatController");
const messageController = require("./message/messageController");

module.exports = {
  authController,
  eventController,
  bookEventController,
  chatController,
  messageController,
};
