import mongoose from "mongoose";

const farmerSchema = mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
      minLength: 6,
      unique: true,
    },
    address: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
      unique: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    farm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Farm'
    },
    replies: {
      type: [String],
      default: [],
    },
    password: {
      type: String,
      minLength: 6,
      required: true
    },
    profilePic:{
      type: String,
      default: '',
    },
    tier:{
      type: String,
      default:'farmer'
    }
  }, {
      timestamps: true,
  });

  const Farmer = mongoose.model('Farmer', farmerSchema);

  export default Farmer