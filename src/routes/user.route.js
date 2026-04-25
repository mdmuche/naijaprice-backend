import express from "express";

import { login, register } from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validateRequest.middleware.js";
import { verifyToken } from "../middlewares/auth.midddleware.js";
import { getProfile } from "../controllers/user.controller.js";

const router = express.Router();

// Define the route for user
router.get("/profile", verifyToken, getProfile);

export default router;
