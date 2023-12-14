const express=require('express')
const { EmpRegister, Emplogin} = require('../controllers/logic')


//create an object for router class in object
const router=new express.Router()


//roote for login
router.post('/inhouse/login',Emplogin)



module.exports=router