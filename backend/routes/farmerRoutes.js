import express from "express";
import { signupFarmer } from "../controllers/farmerControllers.js"; // 

const farmerRouter = express.Router();

farmerRouter.post('/farmers/signup', signupFarmer);

export default farmerRouter;
