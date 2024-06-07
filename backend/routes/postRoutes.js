import express from "express";
import { createPost, getAllPosts, getPost, getUserPosts, deletePost, replyPost } from "../controllers/postControllers.js";
import protectUserRoute from "../utils/middleware/protectUserRoute.js";
import protectFarmerRoute from "../utils/middleware/protectFarmerRoute.js"


const postRouter = express.Router();


postRouter.get("/", getAllPosts);
postRouter.post("/", protectUserRoute, createPost);
postRouter.get("/users/:userId", getUserPosts);
postRouter.get("/:postId", getPost);
postRouter.post("/reply/:postId",protectFarmerRoute ,replyPost);

postRouter.delete("/:postId", protectUserRoute, deletePost);

export default postRouter;