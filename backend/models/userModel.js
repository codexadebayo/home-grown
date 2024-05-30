import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
    required: true,
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
  following: {
    type: [String],
    default: []
  },
  tier:{
    type: String,
    default:'user',
  }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);


export default User