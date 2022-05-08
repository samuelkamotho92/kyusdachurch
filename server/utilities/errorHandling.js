module.exports = (err)=>{
    console.log(err.message,err.code);
    //object to be updated 
    let errors = 
    {name:"", 
    email:"",
     password:"", 
     passwordconfirm:"" ,
    regno:"",
    course:'',
    year:''
}
    if(err.message === "incorrect email"){
        errors.email = "email not regesterd"
        }
        if(err.message === "incorrect password"){
            errors.password = "password not regesterd"
            }
    if(err.code === 11000){
        //duplicate email
        errors.email ="Duplicate email enter a unique one";
        return errors;
    }
    //checking specific error signup errors
    if(err.message.includes("user validation failed") 
    || err.message.includes("member validation failed")){
        Object.values(err.errors).forEach(errAuth=>{
            errors[errAuth.properties.path] = errAuth.properties.message;
        })
    }
    return errors;
}