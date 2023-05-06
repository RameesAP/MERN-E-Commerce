import express from 'express'
import { createOrder } from '../controllers/orderControllers.js';
import { verifyToken } from '../controllers/verifyTokenControllers.js';

const router=express.Router();

router.post("/",verifyToken,createOrder)

// router.put('/:id',verifyTokenAndAuthorization,updateCart)

// router.delete("/:id",verifyTokenAndAuthorization,deleteCart)

// router.get("/find/:userId",verifyTokenAndAuthorization,getUserCart)

// router.get("/",verifyTokenAndAdmin,getAllCart)

export default router