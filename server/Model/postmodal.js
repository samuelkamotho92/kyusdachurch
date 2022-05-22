const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    tags:{
        type:String,
        required:true
    },
    selectedFile:{
        type:String,
        required:true
    }
})
const Post = mongoose.model("post",postSchema);
module.exports = Post;