  
const jwt = require('jsonwebtoken') ;   
  const authmodel = require('../Middleware/jwtauthverify.js') ;
   //check if the token is valid
   const jwtvalidate = async (req,resp,next)=>{
       const token = req.cookies.jwt;
       if(token){
//validate ,expiray
    //verify
    jwt.verify(token,"kyusdauser",(err,decodedToken)=>{
        if(err){
            //redirect
            console.log(err.message)
        resp.redirect("/Login");
        }else{
            //no err we proceed with the route 
            console.log({decodedToken});
        next()
        }
            })
       }else{
       resp.redirect("/Login");
       }
   }
   module.exports = jwtvalidate;