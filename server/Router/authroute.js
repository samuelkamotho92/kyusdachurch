const express = require("express");
const authControler = require("../controller/authcontroler")
const authRouter = express.Router();
authRouter
.route("/register").post(authControler.signupmember);
authRouter
.route("/login").post(authControler.loginmember);
module.exports = authRouter;
