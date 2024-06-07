import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import farmerRouter from "./routes/farmerRoutes.js";
import farmRouter from "./routes/farmRoutes.js";
import postRouter from "./routes/postRoutes.js";
import postFeedRouter from "./routes/feedRoutes.js";
import produceRouter from "./routes/produceRouter.js";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log("server started at" + ` ${PORT}`));

app.use(express.json()); //To parse JSON to our response .body
app.use(express.urlencoded({ extended: true })); //To pass form data in the request body
app.use(cookieParser());

//app routes
app.use("/api/users", userRouter);
app.use("/api/farmers", farmerRouter);
app.use("/api/farms", farmRouter);
app.use("/api/posts", postRouter);
app.use("/feed", postFeedRouter);
app.use("/produce", produceRouter);
