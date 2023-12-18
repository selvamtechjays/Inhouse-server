
const ProjectSchema = require("../models/Projects")


exports.addProject=async(req,res)=>{
    const {projectName,clientName , startDate, endDate
        ,projectType,resources}=req.body


    try{
            const newUser = new ProjectSchema.projects({
                projectName, clientName,startDate,
                endDate,projectType,resources
            })
            
            await newUser.save()
          
            res.status(200).send({message:"Project Added"})

    }
    catch (error) {
        res.status(401).json(error)

    }

}