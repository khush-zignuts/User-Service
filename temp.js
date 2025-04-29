const socketIo = require("socket.io");
const { Event, User, Organizer } = require("../api/models/index");

let io;
let users = {};
const socketSetup = (server) => {
  io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    // console.log("socket: ", socket)
    // registration event
    socket.on("registered", async (data) => {
      const { userId, eventId } = data;

     
    });

    // Handle sending messages
    socket.on("sendMessage", (data) => {
      const { chatId, senderId, receiverId, eventId, message } = data;
      console.log("data: ", data);
      const messagePayload = {
        chatId,
        senderId,
        receiverId,
        eventId,
        message,
      };

      // Emit message to the sender and receiver
      if (users[receiverId]) {
        console.log("users[receiverId]: ", users[receiverId]);
        io.to(users[receiverId]).emit("message", messagePayload);
      }

      if (users[senderId]) {
        io.to(users[senderId]).emit("message", messagePayload);
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
      // You can remove userId/organizerId mappings here if needed
      for (const userId in users) {
        if (users[userId] === socket.id) {
          delete users[userId];
          break;
        }
      }
    });
  });
};

module.exports = { socketSetup };
