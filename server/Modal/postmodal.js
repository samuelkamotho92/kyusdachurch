const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    likecount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const Post = mongoose.model("Post",postSchema);
module.exports = Post;