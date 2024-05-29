import express from "express";
import dotenv from 'dotenv';
import connectDb from "./db/connectDB.js";


dotenv.config();
connectDb();
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(5000, ()=>console.log("server started at" + ` ${PORT}`))
// TODO: Farms \ Produce / users/ farmers
