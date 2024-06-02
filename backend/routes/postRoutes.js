import express from "express";
import { createPost, getAllPosts, getPost, getUserPosts } from "../controllers/postController";
import protectUserRoute from "../utils/middleware/protectUserRoute.js";


const postRouter = express.Router();


postRouter.get("/", getAllPosts);
postRouter.get("/:postId", getPost);
postRouter.post("/", protectUserRoute, createPost);
postRouter.get("/:userId", getUserPosts);



export default postRouter;