import express from 'express'
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../controllers/verifyTokenControllers.js';
import { updateUser } from '../controllers/userControllers.js';


const router=express.Router();

router.put('/:id',verifyTokenAndAuthorization,updateUser,verifyTokenAndAdmin)


export default router