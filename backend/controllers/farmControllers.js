import Farm from "../models/farmModel.js";

const createFarm = async (req, res) => {
  try {
    const { farmName, bio, location } = req.body;
    const farm = await Farm.findOne({ farmName });

    if (farm)
      return res.status(400).json({ message: "farm name already exists" });

    const farmer = req.farmer._id;

    //check if the farmer already has a farm

    const isActive = await Farm.findOne({ farmerId: farmer });
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
    };

  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error creating farm", err);
  };
};
const updateFarm = async (req, res)=>{
  try {
    const {farmName, produce, bio, profilePic, profileVid, location} = req.body
    const farmer = req.farmer._id;
    console.log(farmer || "farmer not found");
    if (!farmer) return res.status(400).json({message: "Farmer does not exist"})
    
    const farmId = req.params.farmId

    let farm = await Farm.findById(farmId);
    if(!farm) return res.status(400).json({message: "Farm does not exist"})

    const authorized = await Farm.findOne({farmerId: farmer})

    if(!authorized) return res.status(400).json({message: "Farmer cannot edit Farms not owned by them"})

    farm.farmName = farmName || farm.farmName;
    farm.produce = produce || farm.produce;
    farm.bio = bio || farm.bio;
    farm.profilePic = profilePic || farm.profilePic;
    farm.profileVid = profileVid || farm.profileVid;
    farm.location = location || farm.location;

    await farm.save()
    return res.status(200).json({message:"Farm updated successfully", farm})

  } catch (err) {
    res.status(500).json({message: err.message})
    console.log("Error in Updating Farm");
    
  }
}

export { createFarm, updateFarm };
