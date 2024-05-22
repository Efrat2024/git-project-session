const express = require("express")
const router = express.Router()
<<<<<<< HEAD
const userController = require("../controllers/userController")
const verifyJWT = require("../middleware/verifyJWT")
// router.use(verifyJWT)
=======

const userController = require("../controllers/userController")
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
router.get("/", userController.getAllUser)
router.get("/:id", userController.getUserById)
router.put("/allRegisters", userController.allRegisters)
router.delete("/", userController.deleteUser)
router.put("/", userController.updateUser)
<<<<<<< HEAD
router.put("/addToShoppingCart", verifyJWT,userController.addToShoppingCart)
router.put("/addTovacationPackage",verifyJWT,userController.addToMyvacationPackage)
router.put("/deleteFromShoppingCart",verifyJWT, userController.deleteFromShoppingCart)
router.put("/deleteFromvacationPackaget",verifyJWT, userController.deleteFromvacationPackaget)
router.put("/keepMeUpdate", verifyJWT,userController.keepMeUpdate)
router.post("/sendEmailTamar", verifyJWT,userController.sendEmailTamar)
router.post("/AddQuestionToTamar", verifyJWT,userController.AddQuestionToTamar)
=======
router.put("/addToShoppingCart", userController.addToShoppingCart)
router.put("/addTovacationPackage", userController.addTovacationPackage)
router.put("/deleteFromShoppingCart", userController.deleteFromShoppingCart)
router.put("/deleteFromvacationPackaget", userController.deleteFromvacationPackaget)
router.put("/keepMeUpdate", userController.keepMeUpdate)
router.post("/sendEmailTamar", userController.sendEmailTamar)

>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
module.exports = router