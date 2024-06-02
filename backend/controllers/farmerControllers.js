import Farmer from "../models/farmerModel.js";
import bcrypt from "bcryptjs";
import generateFarmerTokenAndSetCookie from "../utils/helpers/generateFarmerTokenAndSetCookie.js";

const getFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.findOne(req.params.id).select("-password");
    if (!farmer) return res.status(400).json({ message: "Cannot find farmer" });
    return res.status(200).json({ message: farmer });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in getFarmer");
  }
};

const getAllFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find().select("-password");
    if (!farmers)
      return res.status(400).json({ message: "Cannot find farmers" });
    return res.status(200).json({ message: farmers });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in getAllFarmers");
  }
};

const signupFarmer = async (req, res) => {
  try {
    const { username, firstname, lastname, email, password } = req.body;
    const farmer = await Farmer.findOne({ $or: [{ username }, { email }] });

    if (farmer) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newFarmer = new Farmer({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    await newFarmer.save();
    if (newFarmer) {
      generateFarmerTokenAndSetCookie(newFarmer._id, res);
      res.status(201).json({
        _id: newFarmer._id,
        username: newFarmer.username,
        firstname: newFarmer.firstname,
        email: newFarmer.email,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error("Error in signupFarmer");
  }
};

const loginFarmer = async (req, res) => {
  try {
    const { username, password } = req.body;
    const farmer = await Farmer.findOne({ username });
    const verifyPassword = await bcrypt.compare(
      password,
      farmer?.password || ""
    );

    if (!farmer || !verifyPassword)
      return res.status(400).json({ message: "Invalid farmer credential" });

    generateFarmerTokenAndSetCookie(farmer._id, res);

    res.status(200).json({ message: "Farmer logged in successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in loginFarmer", err);
  }
};

const logoutFarmer = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "Farmer logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Unable to log out user");
  }
};

const updateFarmerProfile = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      username,
      address,
      birthday,
      email,
      password,
      profilePic,
    } = req.body;
    let farmer = await Farmer.findById(req.farmer._id);
    if (!farmer)
      return res.status(400).json({ message: "farmer is not found" });
    if (farmer.username !== req.params.username)
      return res.status(400).json({
        message: "Permission denied to edit another farmer's profile",
      });
    if (password) {
      const salt = await bcrypt.gensalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      password = hashedPassword;
    }

    farmer.firstname = firstname || farmer.firstname;
    farmer.lastname = lastname || farmer.lastname;
    farmer.username = username || farmer.username;
    farmer.address = address || farmer.address;
    farmer.birthday = birthday || farmer.birthday;
    farmer.email = email || farmer.email;
    farmer.profilePic = profilePic || farmer.profilePic;

    farmer = await farmer.save();

    return res
      .status(200)
      .json({ message: "farmer updated successfully", farmer });
  } catch (error) {}
};

const deleteFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.farmerId);
    if (!farmer) return res.status(400).json({ message: "farmId not exist" });

    if (req.farmer._id !== farmer._id)
      return res.status(400).json({ message: "Unauthorized user" });

    await Farmer.findAndDelete(farmer);
    return res.status(202).json({ message: " successfully deleted farmer" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in deleteFarmer");
  }
};

export {
  signupFarmer,
  loginFarmer,
  logoutFarmer,
  updateFarmerProfile,
  getFarmer,
  getAllFarmers,
  deleteFarmer,

};
