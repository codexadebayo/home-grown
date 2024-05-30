import Farmer from "../models/farmerModel.js";
import bcrypt from 'bcryptjs';

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

export { signupFarmer };
