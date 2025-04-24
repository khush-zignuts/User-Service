const Booking = require("./Booking");
const Chat = require("./Chat");
const EmailQueue = require("./Emailqueue");
const Event = require("./Event");
const EventFeedback = require("./EventFeedback");
const EventReminder = require("./EventReminder");
const Message = require("./Message");
const User = require("./User");
const Notification = require("./Notification");

// ================= ASSOCIATIONS =====================


// Booking.sync({ force: true, alter: true });
// Chat.sync({ force: true, alter: true });
// EmailQueue.sync({ force: true, alter: true });
// Event.sync({ force: true, alter: true });
// EventFeedback.sync({ force: true, alter: true });
// EventReminder.sync({ force: true, alter: true });
// Message.sync({ force: true, alter: true });
// // User.sync({ force: true, alter: true });
// Notification.sync({ force: true, alter: true });

// User and Booking
User.hasMany(Booking, { foreignKey: "userId", onDelete: "CASCADE" });
Booking.belongsTo(User, { foreignKey: "userId" });

// Event and Booking
Event.hasMany(Booking, { foreignKey: "eventId", onDelete: "CASCADE" });
Booking.belongsTo(Event, { foreignKey: "eventId" });

// Chat associations
User.hasMany(Chat, { foreignKey: "userId", onDelete: "CASCADE" });
Chat.belongsTo(User, { foreignKey: "userId" });


Event.hasMany(Chat, { foreignKey: "eventId", onDelete: "CASCADE" });
Chat.belongsTo(Event, { foreignKey: "eventId" });

// Message associations
Chat.hasMany(Message, { foreignKey: "chatId", onDelete: "CASCADE" });
Message.belongsTo(Chat, { foreignKey: "chatId" });

// User.hasMany(Message, { foreignKey: "senderId", onDelete: "CASCADE" });
// User.hasMany(Message, { foreignKey: "receiverId", onDelete: "CASCADE" });
// Message.belongsTo(User, { foreignKey: "senderId", as: "Sender" });
// Message.belongsTo(User, { foreignKey: "receiverId", as: "Receiver" });

Event.hasMany(Message, { foreignKey: "eventId", onDelete: "CASCADE" });
Message.belongsTo(Event, { foreignKey: "eventId" });

// EventFeedback
User.hasMany(EventFeedback, { foreignKey: "userId", onDelete: "CASCADE" });
EventFeedback.belongsTo(User, { foreignKey: "userId" });

Event.hasMany(EventFeedback, { foreignKey: "eventId", onDelete: "CASCADE" });
EventFeedback.belongsTo(Event, { foreignKey: "eventId" });

// EventReminder
User.hasMany(EventReminder, { foreignKey: "userId", onDelete: "CASCADE" });
EventReminder.belongsTo(User, { foreignKey: "userId" });

Event.hasMany(EventReminder, { foreignKey: "eventId", onDelete: "CASCADE" });
EventReminder.belongsTo(Event, { foreignKey: "eventId" });

// Notification
User.hasMany(Notification, { foreignKey: "userId", onDelete: "CASCADE" });
Notification.belongsTo(User, { foreignKey: "userId" });

// ================= EXPORT ALL MODELS =================

module.exports = {
  User,
  Event,
  Booking,
  Chat,
  Message,
  EmailQueue,
  EventFeedback,
  EventReminder,
  Notification,
};
