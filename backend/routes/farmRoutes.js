import express from "express";
import { createFarm } from "../controllers/farmControllers.js";


const farmRoutes = express.Router()


farmRoutes.get('/farms', farmRoutes)
farmRoutes.post('/farms/create', createFarm)




farmRoutes.get('/farms/:farm', (req, res)=>{
    console.log("get a farm");
})




export default farmRoutes