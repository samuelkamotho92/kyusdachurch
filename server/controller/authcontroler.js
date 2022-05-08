const authmodel  =  require("../Model/authmodel");
const errorFunc = require("../utilities/errorHandling");
const jwt = require("jsonwebtoken");

//signup users

let maxAge = 1*24*60*60;
//create a jwt token 
const createJwt = (id)=>{
   return jwt.sign({id},process.env.SECRETTOKEN,{
       expiresIn:maxAge
    })

}


const signupmember = async (req,resp)=>{
    try{
const {name,email,password,passwordconfirm} = req.body;
const newmember =
 await authmodel.create({name,email,password,passwordconfirm})
 const tk = createJwt(newmember._id);
 console.log(tk);
 //cookie/localstorage to hold the token
 resp.cookie("kyusdauser",tk,{httpOnly:true,maxAge: maxAge* 1000});
 
resp.status(200).json({newmember})
console.log(`Signed In ${req.body.message}`)
    }catch(err){
        const errormess = errorFunc(err);
        resp.status(401).json({errormess})
        console.log(errormess)
    }
if(req.body.status === "success"){
console.log(`Signed In ${req.body.message}`)
}
}
const loginmember = async (req,resp)=>{
    try{
        const {email,password} = req.body
        console.log(email,password)
        const loggedIn = await authmodel.login(email,password);
        const tk = createJwt(loggedIn._id);
        console.log(tk);
        resp.cookie("kyusdauser",tk,{httpOnly:true,maxAge:maxAge*1000})
resp.status(200).json({loggedIn})
console.log(loggedIn)
    }catch(err){
        const errormess = errorFunc(err);
        resp.status(401).json({errormess})
        console.log(errormess.email,errormess.password);
    }
    if(req.body.status === "success"){
        console.log(`LOGGED IN AS ${req.body.message}`)
        }
}
const loggedoutmember = (req,resp)=>{
    resp.cookie("jwt","",{maxAge: 1 });
  }

module.exports = {
    signupmember,
    loginmember,
    loggedoutmember
}