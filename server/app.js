const express =  require('express');
const authverify = require('./Middleware/jwtauthverify')
const bodyParser = require('body-parser');
const cookieParser  = require("cookie-parser");
const app = express();
const cors = require("cors");
const postroute = require("./Router/post.js");
const authroute = require("./Router/authroute");
const regrouter = require("./Router/regester");
app.use(cookieParser());
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb",extended: true }))
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true}));
//post router middleware
app.use("/posts",authverify,postroute);
app.use("/api/v1/",authroute);
app.use("/api/v1/member/",authverify,regrouter);
module.exports = app;
