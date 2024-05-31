import Farmer from "../../models/farmerModel.js";
import jwt  from "jsonwebtoken";

//don't touch

const protectFarmerRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ message: "Unauthorized farmer" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const farmer = await Farmer.findById(decoded.farmerId).select("-password");

    req.farmer = farmer;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error protectFarmerRoute");
  }
};

export default protectFarmerRoute;
