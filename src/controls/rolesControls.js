const { roles, emp } = require('../../models')
const db = require('../../models')

//create Roles

const addRole = async(req,res)=>{

    let addDetails={
        id:req.db.body.id,
        title:req.db.body.title
    }
    const Role= await roles.create(addDetails)
    res.sataus(200).send(Role)
    console.log(Role)
}
    
//Update Role

const Updaterole = async(req,res)=>{

    let id =req.params.id

    const role = await roles.update(req.db.body,{where :{id : id}})
    res.status(200).send(role)
}
//get all Roles

const getAllRole  =async(req,res)=>{

    let title=req.params.title

    await roles.findAll({})
    res.status(200).send(title)
}

//one to meny relations
  
const allData = async(req,res) => {

   const data = await roles.findAll({
    includ:[{
        model:'emp',
        as:'emp'
    }],
    where :{id:1}
   })
   res.status(200).send(data)

}
module.exports ={

    addRole,
    Updaterole,
    getAllRole

}