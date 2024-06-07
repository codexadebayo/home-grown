import mongoose from "mongoose"



const produceSchema = mongoose.Schema({
    farmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farm',
        required: true,
    },
    produceName: {
        type: String,
        required: true,
    },
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
})


