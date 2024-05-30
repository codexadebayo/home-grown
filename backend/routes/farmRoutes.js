import express from "express";


const farmRoutes = express.Router()


farmRoutes.get('/farms', (req, res)=>{
    console.log("list of all farms");
})
farmRoutes.get('/farms/:farm', (req, res)=>{
    console.log("get a farm");
})




export default farmRoutes