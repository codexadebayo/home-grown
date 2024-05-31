import Farm from "../models/farmModel.js";
import Farmer from "../models/farmerModel.js";

const createFarm = async (req, res) => {
  try {
    const { farmName, bio, location } = req.body;
    const farm = await Farm.findOne({ farmName });

    if (farm)
      return res.status(400).json({ message: "farm name already exists" });

    const farmer = req.farmer._id;

    //check if the farmer already has a farm

    const isActive = await Farm.findOne({ farmerId:farmer });
    if (isActive)
      return res.status(400).json({ message: "Farmer already has a farm" });
    const newFarm = new Farm({
      farmerId: farmer._id,
      farmName,
      bio,
      location,
    });
    await newFarm.save();
    if (newFarm) {
      res.status(201).json({
        Farm: {
          _id: newFarm._id,
          farmerId: newFarm.farmerId,
          farmName: newFarm.farmName,
          bio: newFarm.bio,
          location: newFarm.location,
        },
      });
    } else {
      res.status(400).json({ message: "Invalid Farm detail" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error creating farm", err);
  }
};

export { createFarm };
