const rolesControls=require('.../controls/rolesControls.js')

const router =require(express).Router()

router.post('/addRole',rolesControls,addRole)
router.put('/Updaterole',rolesControls,Updaterole)
router.get('/getAllRole',rolesControls,getAllRole)