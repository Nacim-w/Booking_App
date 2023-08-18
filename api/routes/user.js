import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/VerifyToken.js";
const router = express.Router();
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user, you are authenticated")
})
//UPDATE
router.put("/:id",verifyUser, updateUser)
//DELETE 
router.delete("/:id",verifyUser,deleteUser)
//GET
router.get("/:id",verifyUser, getUser)
//GET ALL
router.get("/",verifyAdmin, getAllUsers)


export default router;