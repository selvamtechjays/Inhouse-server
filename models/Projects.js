const mongoose = require('mongoose')

//create new schema for project
const ProjectSchema = new mongoose.Schema({
    title:
    {
            type: String,
            required: true,
            trim:true,
            maxLength:50
        },
    name:{
        type: Number,
        required:true,
        maxLength:20,
        trim:true
    } , 
    
    startdate:{
        type:Date,
        require:true,
        maxLength:20,
        trim:true
    },
        
    enddate:{
        type:Date,
        require:true,
        maxLength:20,
        trim:true
    },
projecttype:{
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
},{timestamps:true})

module.exports =mongoose.model('Project',ProjectSchema)