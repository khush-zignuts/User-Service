const express = require("express");

const chatController = require("./chat/ChatController");
const messageController = require("./message/messageController");

module.exports = {
  chatController,
  messageController,
};
