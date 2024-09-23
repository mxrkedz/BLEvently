import express from "express";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  createEvent,
  getAllEvents,
  getEventDetails,
  updateEvent,
} from "../controllers/event.js";
const router = express.Router();

router.post("/new", isAuthenticated, singleUpload, createEvent);
router.get("/all", getAllEvents);

router
  .route("/:id")
  .get(getEventDetails)
  .put(isAuthenticated, isAdmin, updateEvent);

export default router;
