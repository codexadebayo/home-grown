import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";


const userRouter = express.Router()

// TODO: users should be able to create, read, update, and delete their profile. Same for their posts.  so i need 6 routes 

userRouter.post('/users/signup', signupUser)
userRouter.post('/users/login', loginUser)


export default userRouter