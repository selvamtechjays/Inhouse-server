//import env file
require('dotenv').config()

//import express
const express=require('express')

const cors=require('cors')
const router = require('./routes/router')
const cookieParser = require('cookie-parser')

//import db
require('./db/connection')

//server
const server=express()
server.use(cookieParser());


//connect frontend
server.use(cors({
    origin: 'https://main.d13xvaj8qtihq.amplifyapp.com', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  }));

server.use(express.json())
server.use(router)



const port=3000 || process.env.port




server.listen(port,()=>{
    console.log(`Expense Server Started at port ${port}`);
})
