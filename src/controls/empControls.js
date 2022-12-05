const db =require('../../models')


//create Employees

const addEmp=async(req,res)=>{

    let addDetils ={

    id:req.db.body.id,
    Fname:req.db.body.Fname,
    Lname:req.db.body.Lname,
    Email:req.db.body.Email,
    rolesid:req.db.body.rolesid
}
const add=await emp.create(addDetils)
res.status(200).send(add)
console.log(add)
}

//getEmployees Details 

const getEmp =async(req,res)=>{

    let id = req.params.id
    const get = await emp.findAll({})
    res.status(200).send(id)
}