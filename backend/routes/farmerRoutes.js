import express from "express";
import {
  createFarm,
  loginFarmer,
  logoutFarmer,
  signupFarmer,
} from "../controllers/farmerControllers.js"; //
import protectFarmerRoute from "../utils/middleware/protectFarmerRoute.js";

const farmerRouter = express.Router();

farmerRouter.post("/farmers/signup", signupFarmer);
farmerRouter.post("/farmers/login", loginFarmer);
farmerRouter.post("/farmers/logout", logoutFarmer);
farmerRouter.post("/farmers/farm", protectFarmerRoute, createFarm )
//all farm routes should be here instead

export default farmerRouter;
