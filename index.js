//import env file
require('dotenv').config()

//import express
const express=require('express')
const {readdirSync} = require('fs')
const cors=require('cors')
// const router = require('./routes/router')
//schema
const UserModel = require('./models/Users')

//import db
require('./db/connection')

//routes 


//server
const app=express()

//connect frontend
app.use(cors(
  
))
app.use(express.json())


readdirSync('./routes').map((route)=>app.use('/api/v1', require('./routes/' +route)))




const PORT=5000 || process.env.port


const server =()=>{
    app.listen(PORT,()=>{
        console.log('listening to port:',PORT);
    })
}
server()

