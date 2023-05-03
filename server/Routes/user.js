import express from 'express'
import { verifyTokenAndAuthorization } from '../controllers/verifyTokenControllers.js';
import { updateUser } from '../controllers/userControllers.js';


const router=express.Router();

router.put('/:id',verifyTokenAndAuthorization,updateUser)


export default router