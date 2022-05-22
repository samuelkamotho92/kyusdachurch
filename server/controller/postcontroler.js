const postmodal = require("../Model/postmodal");


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
const {title,comment,tags,selectedFile} = req.body;
const postCreated =
 await postmodal.create(
     {title,
    comment,
    tags,
    selectedFile});
    console.log(postCreated);
     resp.status(201).json({
         status:"success",
         message:postCreated
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