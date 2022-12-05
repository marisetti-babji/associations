const express=require('express')
const cors=require('cors');


 
const corOption={
    origin :'https://localhost:3000'
}

const app=express();

//midelwares
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const router = require('./routers/roleRouters.js')
const router1 = require('./routers/empRouters.js')

app.use('/',router)
app.use('/',router1)

//test 
app.get('/',(req,res)=>{
    res.send("welcome nodejs")
})

app.listen(3000,()=>{
    console.log("server is running");
})