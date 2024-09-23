import { asyncError } from "../middlewares/error.js";
import { Event } from "../models/event.js";
import ErrorHandler from "../utils/error.js";
import cloudinary from "cloudinary";
import { getDataUri } from "../utils/features.js";

export const createEvent = asyncError(async (req, res, next) => {
  const { name, startDate, endDate, location, category, description, price } =
    req.body;

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
    organizer: req.user._id,
    price,
    images: [image],
  });

  res.status(200).json({
    success: true,
    message: "Event Created Succesfully",
  });
});

export const getAllEvents = asyncError(async (req, res, next) => {
  const events = await Event.find({});

  res.status(200).json({
    success: true,
    events,
  });
});

export const getEventDetails = asyncError(async (req, res, next) => {
  const event = await Event.findById(req.params.id).populate("category");

  if (!event) return next(new ErrorHandler("Event not found", 404));

  res.status(200).json({
    success: true,
    event,
  });
});

export const getMyEvents = asyncError(async (req, res, next) => {
  const events = await Event.find({ organizer: req.user._id });

  res.status(200).json({
    success: true,
    events,
  });
});

export const updateEvent = asyncError(async (req, res, next) => {
  const { name, startDate, endDate, location, category, description, price } =
    req.body;

  const event = await Event.findById(req.params.id);
  if (!event) return next(new ErrorHandler("Event not found", 404));

  if (
    event.organizer.toString() !== req.user._id.toString() &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorHandler("You are not authorized to update this event", 403)
    );
  }

  if (name) event.name = name;
  if (startDate) event.startDate = startDate;
  if (endDate) event.endDate = endDate;
  if (location) event.location = location;
  if (category) event.category = category;
  if (description) event.description = description;
  if (price) event.price = price;

  await event.save();

  res.status(200).json({
    success: true,
    message: "Event Updated Succesfully",
  });
});

export const deleteEvent = asyncError(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  if (!event) return next(new ErrorHandler("Event not found", 404));

  if (
    event.organizer.toString() !== req.user._id.toString() &&
    req.user.role !== "admin"
  ) {
    return next(
      new ErrorHandler("You are not authorized to delete this event", 403)
    );
  }

  for (let index = 0; index < event.images.length; index++) {
    await cloudinary.v2.uploader.destroy(event.images[index].public_id);
  }
  await event.deleteOne();

  res.status(200).json({
    success: true,
    message: "Event Deleted Successfully",
  });
});
