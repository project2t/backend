const mongoose = require("mongoose");

const courseslearing = new mongoose.Schema({
   img: { type: String, required: true},
 Name: { type: String, required: true },
  Discription: { type: String, required: true},
  cousave: {  type:String ,required: true },
});


module.exports = mongoose.model("courses", courseslearing);