import Farmer from "../models/farmerModel.js";
import bcrypt from "bcryptjs";
import generateFarmerTokenAndSetCookie from "../utils/helpers/generateFarmerTokenAndSetCookie.js";

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

const createFarm = async (req, res) =>{

  try {
    const {}= req.body;

    
  } catch (err) {
    res.status(500).json({message: "Error in creating farm"})
    
  }

}
export { signupFarmer, loginFarmer, logoutFarmer, createFarm };
