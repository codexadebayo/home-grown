import express from "express";
import {
  followUnfollowFarm,
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/userController.js";
import protectUserRoute from "../utils/middleware/protectUserRoute.js";

const userRouter = express.Router();

// TODO: users should be able to create, read, update, and delete their profile. Same for their posts.  so i need 6 routes

//protectRoute prevents unauthorized users from hitting endpoint.

userRouter.post("/users/signup", signupUser);
userRouter.post("/users/login", loginUser);
userRouter.post("/users/logout", logoutUser);
userRouter.post("/users/follow/:farmId", protectUserRoute, followUnfollowFarm);
userRouter.get("/users/test", protectUserRoute, (req, res) => {
  console.log("protect user route is working");
});

export default userRouter;
