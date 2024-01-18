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

// connect frontend
server.use(cors({
    origin: 'http://43.204.196.20', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  }));

// server.use(cors())

server.use(cookieParser());
server.use(express.json())
server.use(router)



const port = process.env.PORT || 3000;


server.listen(port,()=>{
    console.log(`Expense Server Started at port ${port}`);
})
