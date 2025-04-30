const express = require("express");

const organizerController = require("./organizer/index");
const userController = require("./user/index");
module.exports = {
  organizerController,
  userController,
};
