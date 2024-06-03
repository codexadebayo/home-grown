import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateUserTokenAndSetCookie from "../utils/helpers/generateUserTokenAndSetCookies.js";
import Farm from "../models/farmModel.js";

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select(
      "-password"
    );
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in getUserProfile:", err);
  }
};

const signupUser = async (req, res) => {
  try {
    const { firstname, lastname, username, password, email } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    generateUserTokenAndSetCookie(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      firstname: newUser.firstname,
      email: newUser.email,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in signupUser:", err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid user credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid user credentials" });
    }

    generateUserTokenAndSetCookie(user._id, res);
    res.status(200).json({ message: "User successfully logged in" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in loginUser:", err);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in logoutUser:", err);
  }
};

const followUnfollowFarm = async (req, res) => {
  try {
    const { farmId } = req.params;
    const farm = await Farm.findById(farmId);
    const user = await User.findById(req.user._id);

    if (!farm || !user) {
      return res.status(404).json({ message: "User or Farm not found" });
    }

    const isFollowing = user.following.includes(farmId);
    const updateUser = isFollowing
      ? { $pull: { following: farmId } }
      : { $push: { following: farmId } };
    const updateFarm = isFollowing
      ? { $pull: { followers: req.user._id } }
      : { $push: { followers: req.user._id } };

    await User.findByIdAndUpdate(req.user._id, updateUser);
    await Farm.findByIdAndUpdate(farmId, updateFarm);

    const message = isFollowing
      ? "Farm unfollowed successfully"
      : "Farm followed successfully";
    res.status(200).json({ message });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in followUnfollowFarm:", err);
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      username,
      address,
      birthday,
      email,
      profilePic,
      password,
    } = req.body;

    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.params.username !== user.username) {
      return res
        .status(403)
        .json({ message: "User is not authorized to edit profile" });
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.username = username || user.username;
    user.address = address || user.address;
    user.birthday = birthday || user.birthday;
    user.email = email || user.email;
    user.profilePic = profilePic || user.profilePic;

    await user.save();

    res.status(200).json({
      message: "User profile updated successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in updateUserProfile:", err);
  }
};

export {
  signupUser,
  loginUser,
  logoutUser,
  followUnfollowFarm,
  updateUserProfile,
  getUser,
};
