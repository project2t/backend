const router =require ('express').Router();

UserController =require ('../controllers/userschema')

router.get ('/',UserController.index);


module.exports =router