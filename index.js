const express =require("express");
const dotenv =require("dotenv");

const userschema =require('./routers/controllers/userschema')
const db = require("./db/db.js");
const   register=require('./routers/controllers/userschema')

//intinal express
const app=express();

dotenv.config()

app.use(express.json());
app.use('/user',userschema)

const PORT = process.env.PORT ||4000;

app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);

});