
const express = require("express");

const Userrouter =express.Router();
//here sign login up date delet
const {getallusers,register, login,userupdate,userdelete} =require ('../controllers/userschema')

//register,login, getallusers, update,userdelete

Userrouter.get('/', getallusers)
Userrouter.post('/register', register);
Userrouter.post('/login', login);
Userrouter.put('/update/:id',userupdate)
Userrouter.delete('/delete/:id',userdelete)


module.exports = Userrouter;
