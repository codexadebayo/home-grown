import express from "express";

import {
  getAllFarmers,
  getFarmer,
  loginFarmer,
  logoutFarmer,
  signupFarmer,
  updateFarmerProfile,
} from "../controllers/farmerControllers.js";

import protectFarmerRoute from "../utils/middleware/protectFarmerRoute.js";


const farmerRouter = express.Router();

farmerRouter.get("/:id", getFarmer);
farmerRouter.get("", getAllFarmers);
farmerRouter.post("/signup", signupFarmer);
farmerRouter.post("/login", loginFarmer);
farmerRouter.post("/logout", logoutFarmer);
farmerRouter.put(
  "/farmers/profile/:username",
  protectFarmerRoute,
  updateFarmerProfile
);

export default farmerRouter;
