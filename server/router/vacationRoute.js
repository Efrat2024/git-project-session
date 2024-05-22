const express=require("express")
const router=express.Router()
<<<<<<< HEAD
const verifyJWT =require("../middleware/verifyJWT")
=======
const verifyJWT= require("../middleware/verifyJWT")
const verifyManager=require("../middleware/verifyManager")
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
const vacationController=require("../controllers/vacationController")
const multer=require('multer')
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads')

    },
    filename:function(req,file,cb){
        const uniqeSuffix=Date.now()+'-'+Math.round(Math.random()*100)
        cb(null,uniqeSuffix+"-"+file.originalname)
    }
})
const upload=multer({storage:storage})
<<<<<<< HEAD
    router.get("/",vacationController.getAllVacation)
    router.get("/:id",vacationController.getVacationById)
    router.post("/",upload.array('images'),verifyJWT,vacationController.createNewVacation)
    router.delete("/",verifyJWT,vacationController.deleteVacation)
    router.put("/",verifyJWT,upload.array('images'),verifyJWT,vacationController.updateVacation)
    router.put("/1",verifyJWT,vacationController.one)
    router.delete("/deleteImageFromImages",verifyJWT,vacationController.deleteImageFromImages)
=======
 router.use(verifyJWT)
// router.use(verifyManager)
    router.get("/",vacationController.getAllVacation)
    router.get("/:id",vacationController.getVacationById)
    // router.get("/",vacationController.getImage)
    //router.post("/",vacationController.createNewVacation)
    router.post("/",upload.array('images'),vacationController.createNewVacation)
    router.delete("/",vacationController.deleteVacation)
    router.put("/",upload.array('images'),vacationController.updateVacation)
    router.put("/1",vacationController.one)
    router.delete("/deleteImageFromImages",vacationController.deleteImageFromImages)
    //router.get("/getFourNewVacations",vacationController.getFourNewVacations)
    //router.put("/addVacation",vacationController.addVacation)
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
 
module.exports=router
