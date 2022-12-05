module.exports=(sequelize,DataType)=>{

const emp = sequelize.define(emp,{
    id:{
        type:DataType.Int,
        PrimaryKey:true
    },
    Fname:{
        type:DataType.STRING
    },
    Lname:{
        type:DataType.STRING
    },
    Email:{
        type:DataType.STRING
    },
    rolesid:{
        type:DataType.INT,
        FOREIGNKEY:true
    }
})
return emp
}