
const TrackerSchema = require("../models/Tracker")


exports.addTracker=async(req,res)=>{
    const {name, employeeCode, techStack, project, percentage,priority}=req.body

    try{
            const newUser = new TrackerSchema.trackers({
                name ,
                employeeCode,
                techStack ,
                project ,
                percentage ,
                priority 

             
            })
            
            await newUser.save()
          
            res.status(200).send({message:"Project Added"})

    }
    catch (error) {
        res.status(401).json(error)

    }

}






//gt Projects
exports.getTracker= async(req,res)=> {
    try{
        const tracker =await TrackerSchema.trackers.find().sort({createdAt: 1})
        res.status(200).json(tracker);
    }catch(error){
        res.status(500).send("Server Error");

    }
    

    
};


//delete project
exports.deleteTracker = async(req,res)=>{
    const {id}= req.params;
   
    TrackerSchema.trackers.findByIdAndDelete(id)
    .then((tracker)=>{
     res.status(200).json({message:"Employee deleted"});
    })
    .catch((err)=>{
     res.status(500).json({message:"Server Error"});
    })
 }


//edit project
exports.updateTracker=async(req,res)=>{
    
        console.log(req.body);
       const {id,...rest} = req.body
        console.log(rest);
        await TrackerSchema.trackers.updateOne({_id :id}, rest)
        res.send({success:true, message:"data updated successfully"})
    
}