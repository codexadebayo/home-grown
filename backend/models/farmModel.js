import mongoose from "mongoose";

const farmSchema = mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
      required: true,
    },
    farmName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      maxLength: 600,
      default: "",
    },
    profilePic: {
      type: String,
      default: "",
    },
    profileVid: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    followers: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Farm = mongoose.model("Farm", farmSchema);

export default Farm;
