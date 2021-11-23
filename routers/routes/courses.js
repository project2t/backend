
const express = require("express");
const courserouter =express.Router ();

const Usercourse =require ('../controllers/courses')

Usercourse.use('/users',Usercourse)


module.exports = courserouter ;