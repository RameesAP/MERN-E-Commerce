import express from 'express'
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../controllers/verifyTokenControllers.js';
import { deleteUser, getAllUser, getUser, updateUser, userStats } from '../controllers/userControllers.js';


const router=express.Router();

router.put('/:id',verifyTokenAndAuthorization,updateUser,verifyTokenAndAdmin)

router.delete('/:id',verifyTokenAndAuthorization,deleteUser)

router.get('/find/:id',verifyTokenAndAdmin,getUser)

router.get('/users',verifyTokenAndAdmin,getAllUser)

router.get("/stats",verifyTokenAndAdmin,userStats)

export default router