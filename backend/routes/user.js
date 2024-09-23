import express from "express";
import { register, login, profile, logout, updateProfile, changePassword } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", isAuthenticated, profile);
router.get("/logout", isAuthenticated, logout);

router.put("/updateprofile",isAuthenticated,updateProfile);
router.put("/changepassword",isAuthenticated,changePassword);

export default router;
