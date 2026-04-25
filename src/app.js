import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connection.config.js";
import userRoutes from "./routes/auth.route.js";
import authRoutes from "./routes/user.route.js";

dotenv.config();

//create an instance of express server object:
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

//use the user routes for handling user-related requests
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/", function (req, res) {
  res.send("Welcome to Naijaprice API!");
});

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
  //call the connectDB function to connect to MongoDB
  connectDB();
});
