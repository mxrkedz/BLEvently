import { asyncError } from "../middlewares/error.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";
import { sendToken, cookieOptions } from "../utils/features.js";

export const register = asyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler("User Already Exist", 400));

  user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user, res, `Registered successfully`, 201);
});

export const login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new Error("Incorrect Email or Password", 400));
  }

  if (!password)
    return next(new ErrorHandler("Please Enter The Password", 400));

  const isMatched = await user.comparePassword(password);

  if (!isMatched) {
    return next(new Error("Incorrect Email or Password", 400));
  }

  const token = user.generateToken();

  sendToken(user, res, `Welcome back, ${user.name}`, 200);
});

export const profile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const logout = asyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      ...cookieOptions,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logout Successfully",
    });
});

export const updateProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const { name, email } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;

  await user.save();

  res.status(200).json({
    success: true,
    user,
    message: "Profile Update Succesfully",
  });
});

export const changePassword = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id).select("+password");

  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword)
    return next(
      new ErrorHandler("Please Enter The Old Password & New Password", 400)
    );

  const isMatched = await user.comparePassword(oldPassword);

  if (!isMatched) return next(new ErrorHandler("Incorrect Old Password", 400));

  user.password = newPassword;
  await user.save();

  res.status(200).json({
    success: true,
    user,
    message: "Password Changed Successfully",
  });
});
