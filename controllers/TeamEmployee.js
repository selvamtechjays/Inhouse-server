const TeamSchema = require("../models/Teams")

exports.addEmployee=async(req,res)=>{
    const {name,role , email, empcode,}=req.body

    const employee = TeamSchema({
        name,
        role,
        email,
        empcode,
    })

    try{
        //validation
        if(!name || !role  || !email ||!empcode){
            return res.status(400).json({message:'Please add all fields'})
        }
        await employee.save()
        res.status(200).json({message:'Employee Added'})

    }
     catch(error){
        res.status(500).json({message:'Server Error'})


    }
    console.log(employee);

}

// exports.addEmployee=async (req,res)=>{
//     const {id}= req.params;
//     const result = await TeamSchema.findOne({ id })
//     if (result) {
//         return {
//             statusCode: 500,
//             message: "Employee already exists"
//         }
//     }
//     else {
//         const newEmployee = new TeamSchema({ name, role, email, empcode })
//         newEmployee.save()
//         return {
//             statusCode: 200,
//             message: "Employee Added Successfully"
//         }
//     }
// }

exports.getEmployees = async(req,res)=>{
    try{
        const employees = await TeamSchema.find().sort({createdAt:1})
        res.status(200).json(employees)

    }catch(error){
        res.status(500).json({message:"Server Error"});

    }
}

exports.deleteEmployee = async(req,res)=>{
   const {id}= req.params;
  
   TeamSchema.findByIdAndDelete(id)
   .then((employee)=>{
    res.status(200).json({message:"Employee deleted"});
   })
   .catch((err)=>{
    res.status(500).json({message:"Server Error"});
   })
}
