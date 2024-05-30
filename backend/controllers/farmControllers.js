import Farm from "../models/farmModel.js";

const createFarm = async (req, res) => {
  try {
    const { farmName, bio, location } = req.body;
    const farm = await Farm.findOne({ farmName });

    if (farm)
      return res.status(400).json({ message: "farm name already exists" });

    const newFarm = new Farm({
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
