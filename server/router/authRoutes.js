const express=require("express")

const router=express.Router()

const authController=require("../controllers/authController")
<<<<<<< HEAD
=======
// const verifyJWT = require("../middleware/verifyJWT")
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
router.post("/login",authController.login)
router.post("/register",authController.register)

module.exports=router