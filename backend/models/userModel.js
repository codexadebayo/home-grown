import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    required: true,
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
  posts: {
    type: [String],
    default: [],
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
  tier:{
    type: String,
    default:'user',
  }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);


export default {Farmer, User}