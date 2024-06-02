import express from "express";
import {
  followUnfollowFarm,
  getUser,
  loginUser,
  logoutUser,
  signupUser,
  updateUserProfile,
} from "../controllers/userController.js";
import protectUserRoute from "../utils/middleware/protectUserRoute.js";

const userRouter = express.Router();

userRouter.get("/:username", getUser);
userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.post("/follow/:farmId", protectUserRoute, followUnfollowFarm);
userRouter.put("/profile/:username", protectUserRoute, updateUserProfile);

userRouter.get("/users/test", protectUserRoute, (req, res) => {
  console.log("protect user route is working");
});

export default userRouter;
