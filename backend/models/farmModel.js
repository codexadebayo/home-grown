import mongoose from "mongoose";


const farmSchema = mongoose.Schema({
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true,
    }, 
    farmName:{
        type: String,
        required: true
    },
    produce:[{
        pricePerUnit: {
            type: String,
            required: true,
        },
        qty: {
            type: Number,
            required: true
        },
        producePic: {
            type:String,
            required: true
        },
        description: {
            type: String,
            required: true,
        }
    }, {
        timestamps: true,
    }],
    bio: {
        type: String,
        maxLength: 600,
    },
    profilePic:{
        type: String,
        default: '',
    },
    profileVid:{
        type:String,
        default:'',
    },
    location: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    followers: {
        type: [String],
        default: []
    }
    
}, {
    timestamps: true
});


const Farm = mongoose.model('Farm', farmSchema);


export default Farm