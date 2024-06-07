import  express  from "express";
import { createProduce, deleteProduce, getAllProduce, getFarmProduce, getFollowingProduce, getProduce, updateProduce } from "../controllers/produceControllers.js";
import protectFarmerRoute from "../utils/middleware/protectFarmerRoute.js";
import protectUserRoute from "../utils/middleware/protectUserRoute.js";



const produceRouter = express.Router()

produceRouter.get("/", getAllProduce);
produceRouter.post("/", protectFarmerRoute, createProduce);
produceRouter.put("/", protectFarmerRoute, updateProduce);
produceRouter.delete("/:produceId", protectFarmerRoute, deleteProduce);
produceRouter.get("/following", protectUserRoute, getFollowingProduce);
produceRouter.get("/:farmName", protectUserRoute, getFarmProduce);
produceRouter.get("/:produceId", protectUserRoute, getProduce);






export default produceRouter