import express from "express";
import { register, login, getMyProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", isAuthenticated, getMyProfile);

export default router;
