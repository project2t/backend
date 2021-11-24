
const express = require("express");
const courserouter =express.Router ();
/// add delete update
const Usercourse =require ('./../controllers/courses')

courserouter.use('/users',Usercourse)


module.exports = courserouter ;