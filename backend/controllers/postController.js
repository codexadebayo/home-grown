import Post from "../models/postModel.js";
import User from "../models/userModel.js";

const getAllPosts = async (req, res) => {
  try {
    const [posts] = await Post.find();
    res.status(200).json({ message: posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in getAllPosts");
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res
        .status(400)
        .json({ message: `Post with id ${req.params.postId} not found` });
    } else {
      return res.status(200).json({ message: post });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in getPost");
  }
};

const getUserPosts = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(400)
        .json({ message: "User not found. No posts for notusers" });
    const [posts] = await Post.findOne({ userId: userId });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in getUserPosts");
  }
};

const createPost = async (req, res) => {
  try {
    // get data from the body
    //fill the userId from req.user._id
    //save
    //return post
    //TODO: Delete previous post table to update.

    const { title, body } = req.body;
    const userId = req.user._id; //I can add a userId parameter to verify user but is that necessary?

    if (!body) return res.status(400).json({ message: "Post saved in trash" });
    if (!userId)
      return res.status(400).json({ message: "Unauthorized action by user" });

    const user = await User.findById(userId).select("-password");

    if (!user) return res.status(400).json({ message: "User unknown" });

    const maxLength = 600;
    const bodyLength = body.length();
    if (bodyLength > maxLength) return res.status(400).json({message: `Post should have fewer characters -${bodyLength-600}.`})
    maxLength
    const newPost = await new Post({
      title: title,
      text: body,
      postedBy: userId,
    });
    await newPost.save();

    if (newPost) {
      res.status(201).json({ message: newPost });
      console.log(
        "Your post has been successfully sent. Hold on for farmers to reachout"
      );
      return;
    } else {
      return res.status(400).json({ message: "error in createPost" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in getPost");
  }
};

// delete post comes with rules.

export { getAllPosts, createPost, getPost, getUserPosts };
