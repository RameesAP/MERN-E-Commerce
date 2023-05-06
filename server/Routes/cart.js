import express from 'express'
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../controllers/verifyTokenControllers.js';
import { createCart, deleteCart, getAllCart, getUserCart, updateCart } from '../controllers/cartControllers.js';

const router=express.Router();

router.post("/",verifyToken,createCart)

router.put('/:id',verifyTokenAndAuthorization,updateCart)

router.delete("/:id",verifyTokenAndAuthorization,deleteCart)

router.get("/find/:userId",verifyTokenAndAuthorization,getUserCart)

router.get("/",verifyTokenAndAdmin,getAllCart)

export default router