import express from "express";
import {
  loginFarmer,
  logoutFarmer,
  signupFarmer,
  updateFarmerProfile,
} from "../controllers/farmerControllers.js"; //
import protectFarmerRoute from "../utils/middleware/protectFarmerRoute.js";

const farmerRouter = express.Router();

farmerRouter.post("/farmers/signup", signupFarmer);
farmerRouter.post("/farmers/login", loginFarmer);
farmerRouter.post("/farmers/logout", logoutFarmer);
farmerRouter.put("/farmers/profile/:username", protectFarmerRoute, updateFarmerProfile)
//all farm routes should be here instead

export default farmerRouter;
