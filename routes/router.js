
const express=require('express')
const { addEmployee } = require('../controllers/TeamEmployee')
const { addProject } = require('../controllers/Projects')


//create an object for router class in object
const router=new express.Router()

//route for add employee
router.post('/api/addemployee',addEmployee)
//route for add projects
router.post('/api/addprojects',addProject)


module.exports=router