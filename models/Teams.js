const mongoose = require('mongoose')

//create new schema for Team
const TeamSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        trim:true,
        maxLength:50
        },

        role:{
            type :String ,
            required: true,
            trim:true,
           maxLength:50
        },
    email:
    {
        type:String,
        unique:true,  
    } , 
    empcode:
    {
        type:String ,
        unique:true,
        required:true,
        maxLength:10

       
       
    },
   
},{timestamps:true})

module.exports =mongoose.model('Team',TeamSchema)