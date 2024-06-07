import Farmer from "../models/farmerModel.js";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import Farm from "../models/farmModel.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ message: { posts } });
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
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(400)
        .json({ message: "User not found. No posts for nonusers" });
    const posts = await user.posts;
    res.status(200).json({ message: posts });
    return;
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
    const userId = req.user._id;

    if (!body) return res.status(400).json({ message: "Post saved in trash" });
    if (!userId)
      return res.status(400).json({ message: "Unauthorized action by user" });

    const user = await User.findById(userId).select("-password");

    if (!user) return res.status(400).json({ message: "User unknown" });

    const maxLength = 600;
    if (body.length > maxLength) {
      res.status(400).json({
        message: `Post should have fewer characters -${bodyLength - 600}.`,
      });
      return;
    }

    const newPost = await new Post({
      title: title,
      text: body,
      postedBy: userId,
    });
    await newPost.save();

    if (newPost) {
      user.posts.push(newPost);
      await user.save();
      res.status(201).json({ message: newPost });
      console.log(
        "Your post has been successfully sent. Hold on for farmers to reach out"
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

const replyPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    if (!text) {
      return res.status(400).json({ message: "Reply can not be blank" });
    }
    const post = await Post.findById(postId);
    console.log(post);
    if (!post) return res.status(400).json({ message: "Post does not exist" });
    const farmer = await Farmer.findById(req.farmer._id);
    if (!farmer)
      return res.status(400).json({ message: "Farmer does not exist" });
    const farm = await Farm.findOne({ farmerId: req.farmer._id });
    if (!farm)
      return res
        .status(400)
        .json({ message: "Farmer must own a farm to reply." });
    const farmProfilePic = farm.profilePic;
    const isFarmVerified = farm.isVerified;
    const farmName = farm.farmName;
    const farmId = farm._id;
    const reply = { farmName, isFarmVerified, text, farmProfilePic, farmId };

    post.replies.push(reply);
    await post.save();
    res.status(200).json({ message: "reply sent successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in reply post");
  }
};

const deletePost = async (req, res) => {
  try {
    // Find the post by ID
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(400).json({ message: "Requested post not found" });
    }

    // Check if the user is authorized to delete the post
    if (post.postedBy.toString() !== req.user._id.toString()) {
      return res
        .status(400)
        .json({ message: "User is not authorized to delete this post" });
    }

    // Delete the post
    await Post.findByIdAndDelete(req.params.postId);

    // Find the user by ID and remove the post from the user's posts array
    const user = await User.findById(req.user._id);

    user.posts.pull(post);

    // Save the updated user document
    await user.save();

    // Send a success response
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    // Handle any errors
    res.status(500).json({ message: err.message });
    console.log("Error in deletePost:", err);
  }
};

export {
  createPost,
  getAllPosts,
  getPost,
  getUserPosts,
  replyPost,
  deletePost,
};
