const express =require('express')
const router =express.Router()

const userschema =require('../controllers/userschema')

router.post('/register',userschema.register)


module.exports =router