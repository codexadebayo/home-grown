import express from "express";
import { signupUser } from "../controllers/userController.js";


const userRouter = express.Router()

// TODO: users should be able to create, read, update, and delete their profile. Same for their posts.  so i need 6 routes 

userRouter.get('/users/:userName', (req, res)=>{
    console.log('Get user profile');
})
userRouter.post('/users/signup', signupUser)

userRouter.post('/users/login', (req, res)=>{
    console.log('user login');
})

userRouter.put('/users/:username/profile', (req, res)=>{
    console.log('user posts');
})

userRouter.delete('/users/:username/profile', (req, res)=>{
    console.log('user posts');
})

userRouter.post('/users/posts', (req, res)=>{
    console.log('user posts');
})
userRouter.get('/users/posts', (req, res)=>{
    console.log('user posts');
})
userRouter.delete('/users/posts', (req, res)=>{
    console.log('user posts');
})


export default userRouter