const { Message, SocketIO } = require("../../../models/index");
const { Op } = require("sequelize");
const { getIo } = require("../../../../config/socketIo");
const { HTTP_STATUS_CODES } = require("../../../../config/constant");

const sendMessage = async (req, res) => {
  try {
    const io = getIo();
<<<<<<< HEAD
    console.log("io: ", io);
=======

>>>>>>> 6264777 (chnages)
    const { chatId, senderId, receiverId, message, eventId } = req.body;

    if (!chatId || !senderId || !receiverId || !message || !eventId) {
      return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
        status: HTTP_STATUS_CODES.BAD_REQUEST,
        message: "Missing required fields.",
        data: null,
        error:
          "chatId, senderId, receiverId, message, and eventId are required.",
      });
    }

    // Save message to DB
    const savedMessage = await Message.create({
      chatId,
      senderId,
      receiverId,
      eventId,
      content: message,
      deliveredAt: Date.now(),
    });

    console.log(`Message saved to DB: ${savedMessage.id}`);

    const [senderSocket, receiverSocket] = await Promise.all([
      SocketIO.findOne({ where: { senderId }, attributes: ["socketId"] }),
      SocketIO.findOne({
        where: { senderId: receiverId },
        attributes: ["socketId"],
      }),
    ]);

    const messagePayload = {
      chatId,
      senderId,
      receiverId,
      eventId,
      message,
    };

    if (receiverSocket?.socketId) {
      io.to(receiverSocket.socketId).emit("message", messagePayload);
      console.log(
        `Message sent to receiver socket: ${receiverSocket.socketId}`
      );
    } else {
      console.log(`No socket found for receiverId: ${receiverId}`);
    }

    if (senderSocket?.socketId) {
      io.to(senderSocket.socketId).emit("message", messagePayload);
      console.log(`Message echoed to sender socket: ${senderSocket.socketId}`);
    } else {
      console.log(`No socket found for senderId: ${senderId}`);
    }

    return res.status(HTTP_STATUS_CODES.CREATED).json({
      status: HTTP_STATUS_CODES.CREATED,
      message: "Message sent successfully.",
      data: savedMessage,
      error: null,
    });
  } catch (error) {
    console.error("Error in sendMessage:", error);
    return res.status(HTTP_STATUS_CODES.SERVER_ERROR).json({
      status: HTTP_STATUS_CODES.SERVER_ERROR,
      message: "Failed to send message.",
      data: null,
      error: error.message || "Internal server error",
    });
  }
};

<<<<<<< HEAD
// const saveMessage = async (req, res) => {
//   try {
//     // console.log("req.body: ", req.body);
//     const { chatId, senderId, receiverId, message, eventId } = req.body;

//     console.log("User Enter in save message : ");

//     // Save message to DB
//     const savedMessage = await Message.create({
//       chatId,
//       senderId,
//       receiverId,
//       content: message,
//       eventId: eventId,
//       deliveredAt: Math.floor(Date.now() / 1000) * 1000,
//     });

//     console.log("Message sent successfully.");
//     return res.status(HTTP_STATUS_CODES.CREATED).json({
//       status: HTTP_STATUS_CODES.CREATED,
//       message: "Message sent successfully.",
//       data: savedMessage,
//       error: "",
//     });
//   } catch (error) {
//     console.error("Error saving message:", error);
//     return res.status(HTTP_STATUS_CODES.SERVER_ERROR).json({
//       status: HTTP_STATUS_CODES.SERVER_ERROR,
//       message: "Failed to send message.",
//       data: "",
//       error: error.message || "Internal server error",
//     });
//   }
// };

const getMessages = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    console.log("chatId: ", chatId);
    const senderId = req.user.id;
    console.log("senderId: ", senderId);
=======
const getMessages = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    
    const senderId = req.user.id;
   
>>>>>>> 6264777 (chnages)

    const limit = parseInt(req.query.limit) || 20;
    const before = req.query.before ? new Date(req.query.before) : new Date();

    const messages = await Message.findAll({
      where: {
        chatId,
        createdAt: { [Op.lt]: before },
      },
      order: [["createdAt", "DESC"]],
      limit,
    });

    return res.status(HTTP_STATUS_CODES.OK).json({
      status: HTTP_STATUS_CODES.OK,
      message: "Messages fetched successfully.",
      data: messages,
      error: "",
    });
  } catch (err) {
    console.error("Error fetching messages:", err);
    return res.status(HTTP_STATUS_CODES.SERVER_ERROR).json({
      status: HTTP_STATUS_CODES.SERVER_ERROR,
      message: "Failed to fetch messages.",
      data: "",
      error: err.message || "Internal server error",
    });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};
