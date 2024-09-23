import { asyncError } from "../middlewares/error.js";
import { Event } from "../models/event.js";
import ErrorHandler from "../utils/error.js";
import cloudinary from "cloudinary";
import { getDataUri } from "../utils/features.js";

export const createEvent = asyncError(async (req, res, next) => {
  const {
    name,
    startDate,
    endDate,
    location,
    category,
    description,
    organizer,
    price,
  } = req.body;

  if (!req.file) return next(new ErrorHandler("Please add image", 400));

  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content, {
    folder: "events",
  });
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  await Event.create({
    name,
    startDate,
    endDate,
    location,
    category,
    description,
    organizer,
    price,
    images: [image],
  });

  res.status(200).json({
    success: true,
    message: "Event Created Succesfully",
  });
});

export const getAllEvents = asyncError(async (req, res, next) => {
  const { keyword, category } = req.query;

  const events = await Event.find({});

  res.status(200).json({
    success: true,
    events,
  });
});
