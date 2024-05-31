import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import farmerRouter from "./routes/farmerRoutes.js";
import farmRouter from "./routes/farmRoutes.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log("server started at" + ` ${PORT}`));

app.use(express.json()); //To parse JSON to our response .body
app.use(express.urlencoded({ extended: true })); //To pass form data in the body
app.use(cookieParser());

app.use("/api", userRouter);
app.use("/api", farmerRouter);
app.use("/api", farmRouter);
