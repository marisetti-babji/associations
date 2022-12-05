module.exports =(sequelize,DataType)=>{
 const roles = sequelize.define("roles",{
    
id:{
    type:DataType.INT,
    PrimaryKey :true
},
title:{
    type: DataType.STRING
}
 })
 return roles 
}