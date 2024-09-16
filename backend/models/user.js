import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: [true, "Email Already Exist"],
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minLength: [6, "Password must be at least 6 characters long"],
    select: false,
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  avatar: {
    public_id: String,
    url: String,
  },
  otp: Number,
  otp_expire: Date,
});

export const User = mongoose.model("User", schema);
