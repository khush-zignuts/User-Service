require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

const { socketSetup } = require("./config/socketIo");
const bodyParser = require("body-parser");
const cors = require("cors"); // <-- Import cors
const sequelize = require("./config/db");

const userRoutes = require("./api/routes/index");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
    // origin: ["http://localhost:5173", , "http://127.0.0.1:5500"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
//127.0.0.1:5500/api/public/chat.html
//Routes
http: app.use("/api/user", userRoutes);

//for internal html :
app.use(express.static(path.join(__dirname, "api", "public")));

// at last port call :
const PORT = process.env.PORT;

server.listen(PORT, async () => {
  // Sync Database and Start Server
  try {
    socketSetup(server);
    // await sequelize.sync({ alter: true }); // or { force: true } to drop & recreate tables (CAUTION)
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
