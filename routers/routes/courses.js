
const express = require("express");
const courserouter =express.Router ();
/// add delete update
const { getallcourses ,postcoueses,deletecourses} =require ('./../controllers/courses')

courserouter.get('/get',getallcourses)
courserouter.post('/post',postcoueses)
courserouter.delete('/delete',deletecourses)


module.exports = courserouter ;