
const express = require("express");

const Userrouter =express.Router();
//here sign login up date delet
const {getallusers,register, login,userupdate,userdelete,Savedcourses,unsavedcourses
    ,getSaved ,savedcoursescheck} =require ('../controllers/userschema')

//register,login, getallusers, update,userdelete

Userrouter.get('/', getallusers)
Userrouter.post('/register', register);
Userrouter.post('/login', login);
Userrouter.put('/update/:id',userupdate)
Userrouter.delete('/delete/:id',userdelete)
Userrouter.get('/allsave/:email', getSaved );
Userrouter.put("/saved/:email/:_id", Savedcourses);
Userrouter.put("/unsave/:email/:_id", unsavedcourses);
Userrouter.put("/savedckeck/:email/:ObjectId",savedcoursescheck);



module.exports = Userrouter;
