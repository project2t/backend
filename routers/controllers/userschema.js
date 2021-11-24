const Userrouter = require("../routes/userschema");
const User = require("./../../DB/models/userSchema");


const  register = (req, res) =>{
    const { name, username,email,phone,password ,city} = req.body;
    
      const newuser = new User({
        name:req.body.name,
         username:req.body.username,
         email:req.body.email,
         phone:req.body.phone,
         password:req.body.password,
         city:req.body.city
      });
    
      User
        .save()
        .then(newuser => {
          res.json({message :'User Added Successfully'});
        })
        .catch((err) => {
          res.send(err);
        });


    }
        ////////login 
        const login = (req, res ,next ) =>{

            const username= req.body.username,
          const password=req.body.password
           

          User.findOne({$or:[{email:username},{phone:username}]})
          .then(User => {
            res.json(User);
          })
          .catch((err) => {
            res.send(err);
          });
          }


module.exports=  { register , login }