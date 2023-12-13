const express=require('express')
const { EmpRegister, Emplogin} = require('../controllers/logic')


//create an object for router class in object
const router=new express.Router()

//route for register
router.post('/inhouse/register',EmpRegister)

//roote for login
router.post('/inhouse/login',Emplogin)



module.exports=router