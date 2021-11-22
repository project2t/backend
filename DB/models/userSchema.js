const mongoose = require("mongoose")
const schema =mongoose.schema

const userSchema = new schema({
name:{
type:String

},
email:{
type:String

},
phone:{

type:Number

},
password:{
type:String

}

},
{timestamps:true})

const user =mongoose.model('User',userSchema)
module.exports=user;