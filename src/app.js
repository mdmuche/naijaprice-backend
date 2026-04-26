import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

import { connectDB } from "./config/connection.config.js";
import userRoutes from "./routes/auth.route.js";
import authRoutes from "./routes/user.route.js";
import { swaggerSpec } from "./config/swagger.js";

dotenv.config();

//create an instance of express server object:
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//use the user routes for handling user-related requests
app.use("/v1/auth", authRoutes);
app.use("/v1/user", userRoutes);

app.get("/", function (req, res) {
  res.send("Welcome to Naijaprice API!");
});

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
  //call the connectDB function to connect to MongoDB
  connectDB();
});
