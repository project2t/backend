const mongoose = require("mongoose");

const courseslearing = new mongoose.Schema({
   img: { type: String, required: true},
 name: { type: String, required: true },
  text: { type: String, required: true},
  cousave: {  type:String ,required: true },
});


module.exports = mongoose.model("courses", courseslearing);