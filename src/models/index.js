const dbconfig = require('../config/dbConfig')

const {sequelize,DataType} = require('sequelize')

const sequelise = new sequelize(

    dbconfig.DB,
    dbconfig.HOST,
    dbconfig.USER,
    dbconfig.PASSWORD,
    {
       host: dbconfig.HOST,
       dialect:dbconfig.DIALECT
    }

)
sequelise.authonticat()
.than(()=>{
   console.log('connected')
})
.catch((err)=>{
    console.log("error"+err)
})

const db={}

db.sequelize = sequelize,//class
db.sequelise=sequelize,//values

db.roles = require('./rolesModel.js')(sequelize,DataType)//modelroles
db.emp = require('./empModel.js')(sequelize,DataType)//modelemp

 db.sequelize = sync({force:false})
 .than(()=>{
    ('re-sync done')
 })

 //one to meny

 db.roles.hasMany(db.emp ,{
   foreignkey:'id',
   as: 'emp'
 })
   db.emp.hasMany(db.roles ,{
      foreignkey:'rolesid',
      as: 'roles'
   
 })


 module.exports =db
