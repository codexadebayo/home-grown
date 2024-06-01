import express from "express";
import { createFarm, updateFarm } from "../controllers/farmControllers.js";
import protectFarmerRoute from "../utils/middleware/protectFarmerRoute.js";

const farmRoutes = express.Router();

farmRoutes.post("/farms/create", protectFarmerRoute, createFarm);
farmRoutes.put("/farms/profile/:farmId", protectFarmerRoute, updateFarm);

export default farmRoutes;
