import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateUserTokenAndSetCookie from "../utils/helpers/generateUserTokenAndSetCookies.js";

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

const loginUser = async (req, res)=>{
  try {

    const {username, password} = req.body;
    const user = await User.findOne({username});
    const verifyPassword = await bcrypt.compare(password, user?.password ||"");

    if (!user || !verifyPassword){
      return res.status(400).json({message: "Invalid user credentials"})
    };

    generateUserTokenAndSetCookie(user._id, res);

    res.status(200).json({message: "User successfully logged in"})
    
  } catch (err) {
    res.status(500).json({message:"Error in loginUser"})
    console.log("Error", err.message);
    
  }
}

export { signupUser, loginUser };
