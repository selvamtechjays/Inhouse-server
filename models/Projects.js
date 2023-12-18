const mongoose = require('mongoose')

//create new schema for project
const projects=mongoose.model('Project',{
    projectName:
    {
            type: String,
            required: true,
            trim:true,
            maxLength:50
        },
        clientName:{
        type: String,
        required:true,
        maxLength:20,
        trim:true
    } , 
    
    startDate:{
        type:Date,
        require:true,
        maxLength:20,
        trim:true
    },
        
    endDate:{
        type:Date,
        require:true,
        maxLength:20,
        trim:true
    },
    projectType:{
    type :String,
    require:true,
    maxLength:20,
    trim:true
},
  resources:{
        type :String,
        require:true,
        maxLength:20,
        trim:true
    } , 
})

module.exports={projects}