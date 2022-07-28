import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import corsOptions from "./config/corsOptions";
import mongoose from "mongoose";
import connectDB from "./config/db";
const cloudinary = require("cloudinary").v2;
dotenv.config();

// routes import
import fileRoute from "./routes/files";
import shareFileRoute from "./routes/shareFile";

const PORT = process.env.PORT || 5000;
const app = express();

// couldinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/// connect to mongoDB
connectDB();

// ** MIDDLEWARE **
app.use(cors(corsOptions as CorsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ** ROUTES **
app.use("/api/files", fileRoute);
app.use("/api/sharefile", shareFileRoute);

app.get("*", (req: Request, res: Response) => {
  res.status(404).json({ msg: "Resource not found" });
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected...");
  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
});
