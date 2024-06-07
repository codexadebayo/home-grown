import Farmer from "../models/farmerModel";







const createProduce = async (req, res) => {
  try {
    const {produceName, pricePerUnit, qty, producePic, description} = req.body;
    const farmer = await Farmer.findById(req.body._id);
    if (!farmer) return res.status(400).json({message: "Couldn't verify farmer"})
    const farm = farmer.farm
console.log(farm); //check what value i'm getting back.
    const farmId = farm._id

    
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in createProduce");
  }
};
const updateProduce = async (req, res) => {};
const deleteProduce = async (req, res) => {};

const getAllProduce = async (req, res) => {};

const getFollowingProduce = async (req, res) => {};

const getFarmProduce = async (req, res) => {};

const getProduce = async (req, res) => {};

export {
  createProduce,
  updateProduce,
  deleteProduce,
  getAllProduce,
  getFarmProduce,
  getFollowingProduce,
  getProduce,
};
