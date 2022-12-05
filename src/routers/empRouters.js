const empControls=require('.../controls/empControls.js')

const router1 = require('express').Router();

router1.Push('/addEmp',empControls,addEmp)
router1.get('/getEmp',empControls,getEmp,getAllRole)