import express from "express";
import { createPost, getAllPosts, getPost, getUserPosts, deletePost } from "../controllers/postControllers.js";
import protectUserRoute from "../utils/middleware/protectUserRoute.js";


const postRouter = express.Router();


postRouter.get("/", getAllPosts);
postRouter.post("/", protectUserRoute, createPost);
postRouter.get("/users/:userId", getUserPosts);
postRouter.get("/:postId", getPost);
postRouter.delete("/:postId", protectUserRoute, deletePost);

export default postRouter;