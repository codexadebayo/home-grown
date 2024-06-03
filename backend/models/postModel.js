import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        default:"",
    },
    text:{
        type: String,
        maxLength: 600 
    },
    replies: [
        {
            farmId :{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Farm',
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            img:{

                type: String,
                default:'',
            },
            farmProfilePic: {
                type: String,
            },
            farmName:{
                type: String,
            }
        }, {timestamps:true}
    ],

}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

export default Post;

