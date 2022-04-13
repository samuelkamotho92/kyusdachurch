const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const postroute = require("./Router/post.js");
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb",extended: true }))
app.use(cors());
//post router middleware
app.use("/posts",postroute);

module.exports = app;