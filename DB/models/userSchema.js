const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
username:{type:String ,required :true},
email:{type:String,required: true,unique:true    },
phone:{type:Number,unique:true, default:0 },
password:{type:String ,required: true},
SavedSchema: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courses" }],
city:{ type:String,default:"Qassim"}
},


{timestamps:true})

module.exports =mongoose.model('User',userSchema)
