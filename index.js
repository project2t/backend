const express =require("express");
const dotenv =require("dotenv");

const db = require("./db/db.js");

//intinal express
const app=express();
dotenv.config()

app.use(express.json());


const PORT = process.env.PORT ||4000;

app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);
});