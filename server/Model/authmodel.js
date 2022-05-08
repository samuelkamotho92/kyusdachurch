const {isEmail} = require("validator");
const  bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const authSchema = new Schema({
   name:{
        type:String,
        required:[true,"please enter your names"],
        lowercase:true,
    },
    email:{
        type:String,
        required:[true,"please enter an email"],
        unique:[true,"please enter a unique email"],
        lowercase:true,
        validate:[isEmail,"Please enter a valid email"]
    },
password:{
        type:String,
        required:[true,"please enter a password"],
        minlength:[8,"please enter 8 or more character"]
    },
passwordconfirm:{
        type:String,
        required:[true,"please enter password confirmation"],
        validate:{
            validator:function(el){
                return el === this.password
            },
            message:`Enter the correct password confirmation,try again`
        }
    },
    role:{
        type:String,
        enum:["user","admin","owner"],
        default:"user"
    }
});

//prehook
authSchema.pre("save",async function(next){
    //hash the passowrd
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    this.passwordconfirm = undefined;
    next();
})

//login user method which acts as prehook 
authSchema.statics.login = async function(email,password){
    const member = await this.findOne({email});
    if(member){
        //compare password
    const authmember = await bcrypt.compare(password,member.password);
    if(authmember){
        return member
    }
        throw Error("incorrect password")
    }
        throw  Error("incorrect email");
}

const authmodel = mongoose.model("user",authSchema);
module.exports = authmodel;