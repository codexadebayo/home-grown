import jwt from "jsonwebtoken";

const generateFarmerTokenAndSetCookie = (farmerId, res) => {
  const token = jwt.sign({ farmerId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });

  return token;
};

export default generateFarmerTokenAndSetCookie
