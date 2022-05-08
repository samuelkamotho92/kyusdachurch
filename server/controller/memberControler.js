const errorfunc = require("../utilities/errorHandling");

const memberModel = require('../model/memberModel');

const regesterMember = async(req,resp)=>{
    try{
const {name,email,regno,course,year} = req.body;
const newmember = 
await memberModel.create({name,email,regno,course,year});
console.log(newmember);
resp.status(200).json({newmember})
}catch(err){
console.log(err);
const errormess = errorfunc(err);
console.log(errormess)
resp.status(401).json({errormess})
    }
}
module.exports = {regesterMember};