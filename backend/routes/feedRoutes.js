import express from "express";
import {
  deletePostFeed,
  getPostFeed,
} from "../controllers/postFeedControllers";

const postFeedRouter = express.Router();

postFeedRouter.get("/", getPostFeed);
postFeedRouter.delete("/:postId", deletePostFeed);

export default postFeedRouter;
