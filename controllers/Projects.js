
const ProjectSchema = require("../models/Projects")

// exports.addProject = async(req,res) =>{
// const {projectName,clientName , startDate, endDate, projectType, resources}=req.body
// const project = ProjectSchema({
//     projectName,
//     clientName,
//     startDate,
//     endDate,
//     projectType,
//     resources

// })

// try{
//  //validations
//     if (!projectName || !clientName || !startDate || !endDate || !projectType || !resources) {
//     return res.status(400).json({ message: "Please fill the all fields" });
//     }
//     await project.save();
//     res.status(200).json({ message: "Project Added" });

// }catch(error){
//     res.status(500).json({ message: "Server Error" });
// }
// console.log(project);
// };
exports.addProject=async(req,res)=>{
    const {projectName,
            clientName,
            startDate,
            endDate,
            projectType,
            resources}=req.body

    try{
            const newUser = new ProjectSchema({
                projectName,
                clientName,
                startDate,
                endDate,
                projectType,
                resources
            })
            
            await newUser.save()
          
            res.status(200).send({message:"Project Added"})

    }
    catch (error) {
        res.status(401).json(error)

    }

}




//gt Projects
exports.getProjects= async(req,res)=> {
    try{
        const projects =await ProjectSchema.find().sort({createdAt: 1})
        res.status(200).json(projects);
    }catch(error){
        res.status(500).send("Server Error");

    }
    

    
};

// exports.deleteProject =async(req,res)=>{
 
//     const {id} = req.params;
//     ProjectSchema.findByIdAndDelete(id)
//     .then((project)=>{
//         res.status(200).json({ message: "Project Deleted" });
//     })
//     .catch((err) => {
//         res.status(500).json({ message: " Server Error" });
//       });
// }

//delete project
exports.deleteProject =async(req,res)=>{
    const {id} =req.params
    console.log(id);
    await ProjectSchema.deleteOne(id)
    res.send({success:true,message:"data deleted successfully"})

}


//edit project




   
