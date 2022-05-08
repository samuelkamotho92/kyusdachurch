const express = require("express");
const postcontrollers = require("../controller/postcontroler");
const postrouter = express.Router();

postrouter.route("/")
.get(postcontrollers.getPost);
postrouter.route("/send")
.post(postcontrollers.createpost);

module.exports = postrouter;