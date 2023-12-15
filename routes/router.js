const { addEmployee, getEmployees, deleteEmployee } = require('../controllers/TeamEmployee')

const router = require('express').Router()





router.post('/add-employee', addEmployee)
    .get('/get-employees', getEmployees)
    .delete('/delete-employee/:id', deleteEmployee )

module.exports =router