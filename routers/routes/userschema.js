
const express = require("express");

const Userrouter =express.Router();
//here sign login up date delet
const UserController =require ('../controllers/userschema')

Userrouter.get ('/',UserController.index);

module.exports = Userrouter;