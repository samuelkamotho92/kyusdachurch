const {isEmail} = require("validator");
const  bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const memberSchema = new Schema({
   name:{
        type:String,
        required:[true,"please enter your full names"],
        lowercase:true,
        minlength:[10,"please enter 10 or more characters"]
    },
    email:{
        type:String,
        required:[true,"please enter an email"],
        unique:[true,"please enter a unique email"],
        lowercase:true,
        validate:[isEmail,"Please enter a valid email"]
    },
    regno:{
        type:String,
        required:[true,"please enter your regno"],
        unique:[true,"please enter a unique regno"],
        uppercase:true,
        minlength:[10,"please enter 10 or more characters"],
    },
    course:{
        type:String,
        required:[true,"please enter your course"],
        lowercase:true,
        minlength:[5,"please enter 5 or more characters"]
    },
    year:{
        type:Number,
        required:[true,"please enter your curent year"]
    }

});



const membermodel = mongoose.model("member",memberSchema);
module.exports = membermodel;