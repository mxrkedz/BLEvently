import express from "express";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import { createEvent } from "../controllers/event.js";
const router = express.Router();

router.post("/new", isAuthenticated, singleUpload, createEvent);

export default router;
