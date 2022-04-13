const postmodal = require("../Modal/postmodal");


const getPost = async(req,resp)=>{
    try{
const messages = await postmodal.find();
resp.status(200).json({
    status:"success",
    message:messages
})
    }catch(err){
resp.status(404).json({
    status:"fail",
    message:err.message
})
    }
};
const createpost = async(req,resp)=>{    
    try{
const {title,content,author} = req.body;
const userCreated = await postmodal.create({title,content,author});
     resp.status(201).json({
         status:"success",
         message:userCreated
     })
    }catch(err){
        resp.status(409).json({
            status:"fail",
            message:err.message
        })
    }
}

module.exports = {
    getPost,
    createpost
}