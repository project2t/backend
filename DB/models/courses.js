const mongoose = require("mongoose");

const courseslearing = new mongoose.Schema({
   img: { type: String, required: true},
 name: { type: String, required: true },
  desc: { type: String, required: true},
  
});


module.exports = mongoose.model("Courses", courseslearing);