import { asyncError } from "../middlewares/error.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";

export const register = asyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler("User Already Exist", 400));

  user = await User.create({
    name,
    email,
    password,
  });

  res.send("Registered successfully");
});
