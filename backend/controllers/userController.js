import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateUserTokenAndSetCookie from "../utils/helpers/generateUserTokenAndSetCookies.js";
import Farm from "../models/farmModel.js";

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select(
      "-password"
    );
    if (!user) return res.status(400).json({ message: "User not found" });

    res.status(200).json({ message: user });
  } catch (err) {
    res.status(500).json({message: err.message});
    console.log("Error in getUserProfile");
  }
};

const signupUser = async (req, res) => {
  try {
    const { firstname, lastname, username, password, email } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.status(200).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      generateUserTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        firstname: newUser.firstname,
        email: newUser.email,
      });
    } else {
      res.status(400).json({
        message: "Error in user signup data",
      });
    }
  } catch (err) {
    res.status(500).json(
      {
        message: err.message,
      },
      console.log("Error SignupUser")
    );
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const verifyPassword = await bcrypt.compare(password, user?.password || "");

    if (!user || !verifyPassword) {
      return res.status(400).json({ message: "Invalid user credentials" });
    }

    generateUserTokenAndSetCookie(user._id, res);

    res.status(200).json({ message: "User successfully logged in" });
  } catch (err) {
    res.status(500).json({ message: "Error in loginUser" });
    console.log("Error", err.message);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Unable to log out user");
  }
};

const followUnfollowFarm = async (req, res) => {
  try {
    const { farmId } = req.params; //
    const farm = await Farm.findById(farmId); //
    const user = await User.findById(req.user._id); //user object in middleware
    if (farmId === req.user._id)
      return res
        .status(400)
        .json({ message: "Invalid user action. Can not follow farm" });
    if (!farm || !user)
      return res.status(400).json({ message: "User or Farmer not found" });

    const isFollowing = user.following.includes(farmId);
    if (isFollowing) {
      //unfollow farm
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { following: farmId },
      });
      await Farm.findByIdAndUpdate(farmId, {
        $pull: { followers: req.user._id },
      });
      return res.status(200).json({ message: "Farm unfollowed successfully" });
    } else {
      //follow farm
      await User.findByIdAndUpdate(req.user._id, {
        $push: { following: farmId },
      });
      await Farm.findByIdAndUpdate(farmId, {
        $push: { followers: req.user._id },
      });
      return res.status(200).json({ message: "Farm followed successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error followUnfollow farm");
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

    let user = await User.findById(userId);
    if (!user) return res.status(400).json({ message: "User not found" });

    if (req.params.username !== user.username)
      return res
        .status(400)
        .json({ message: "User is not authorized to edit profile" });

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
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
    console.log("Error updating user");
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
