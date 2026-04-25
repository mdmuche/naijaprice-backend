import express from "express";

import {
  login,
  register,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validateRequest.middleware.js";
import { loginSchema, registerSchema } from "../validators/user.validator.js";

const router = express.Router();

//Register Route
router.post("/register", validateRequest(registerSchema), register);

// Verifyemail Route
router.get("/verify-email/:token", verifyEmail);

// Login Route
router.post("/login", validateRequest(loginSchema), login);
export default router;
