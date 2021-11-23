const User = require("./../../DB/models/userSchema");

module.exports={
index:(req,res)=>{
User.find({}).then(users =>{

    res.json(users)
})
.catch(error =>{
    res.json({error:error})
})


}

}
