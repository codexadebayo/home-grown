import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'

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

export { signupUser };
