import mongoose from "mongoose";


const farmSchema = mongoose.Schema({
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true,
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
        default:''
    },
    location: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    }
    
}, {
    timestamps: true
});


const Farm = mongoose.model('Farm', farmSchema);


export default Farm