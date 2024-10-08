import express from "express";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

config({
  path: "./data/config.env",
});

export const app = express();

app.use(express.json());
app.use(cookieParser());

import user from "./routes/user.js";
import event from "./routes/event.js";
app.use("/api/v1/user", user);
app.use("/api/v1/event", event);

app.use(errorMiddleware);
