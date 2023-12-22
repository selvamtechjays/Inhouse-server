
const express=require('express')
const { addEmployee, getEmployees, updateEmployee, deleteEmployee } = require('../controllers/TeamEmployee')
const { addProject, getProjects,deleteProject, updateProject } = require('../controllers/Projects')


//create an object for router class in object
const router=new express.Router()

//route for add employee
router.post('/api/add-employee',addEmployee)
// route for get employee
router.get('/api/get-employees',getEmployees)
//route for update employee
router.put('/api/update-employee/:id',updateEmployee)
//route for delete employee
router.delete('/api/delete-employee/:id',deleteEmployee)

//route for add projects
router.post('/api/add-project',addProject)
//route for get projects
router.get('/api/get-projects',getProjects)
//route for delete projects
router.delete('/api/delete-project/:id',deleteProject)

// route for update projects
router.put("/api/update-project/:id", updateProject);


module.exports=router