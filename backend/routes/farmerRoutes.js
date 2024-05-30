import express from "express";
import { loginFarmer, signupFarmer } from "../controllers/farmerControllers.js"; // 

const farmerRouter = express.Router();

farmerRouter.post('/farmers/signup', signupFarmer);
farmerRouter.post('/farmers/login', loginFarmer);


export default farmerRouter;
