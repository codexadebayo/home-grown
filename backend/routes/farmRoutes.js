import express from "express";
import {
  createFarm,
  deleteFarm,
  getAllFarms,
  getFarm,
  updateFarm,
} from "../controllers/farmControllers.js";
import protectFarmerRoute from "../utils/middleware/protectFarmerRoute.js";
import farmerRouter from "./farmerRoutes.js";

const farmRoutes = express.Router();

farmRoutes.get("", getAllFarms);
farmRoutes.get("/:farmName", getFarm);
farmRoutes.post("/create", protectFarmerRoute, createFarm);
farmRoutes.put("/profile/:farmId", protectFarmerRoute, updateFarm);
farmerRouter.delete("/profile/:farmId", protectFarmerRoute, deleteFarm);

export default farmRoutes;
