require("dotenv").config();
const express = require("express");
const cors = require("cors"); // <-- Import cors
const sequelize = require("./config/db");

const userRoutes = require("./api/routes/index");

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // replace with your frontend URL
    credentials: true,
  })
);

//Routes
app.use("/api/user", userRoutes);

// at last port call :
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  // Sync Database and Start Server
  try {
    await sequelize.sync({ alter: true }); // or { force: true } to drop & recreate tables (CAUTION)
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
