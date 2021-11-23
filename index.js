const express =require("express");
const dotenv =require("dotenv");
const cors =require("cors");
const userSchema =require('./routers/routes/userschema')

const db = require("./db/db.js");
const courseslearing=require('./routers/routes/courses')

//intinal express
const app=express();

dotenv.config()

app.use(express.json());
app.use(cors())

app.use('/User',userSchema)
app.use('/courses',courseslearing)


//

const PORT = process.env.PORT ||4000;

app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);

});