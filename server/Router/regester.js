const express = require("express");
const regesterControler = require("../controller/memberControler");
const memberRouter = express.Router();

memberRouter
.route("/register")
.post(regesterControler.regesterMember);

module.exports = memberRouter;