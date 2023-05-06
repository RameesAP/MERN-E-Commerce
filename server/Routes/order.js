import express from 'express'
import { createOrder, deleteOrder, getAllOrder, getMonthlyIncome, getUserOrder, updateOrder } from '../controllers/orderControllers.js';
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../controllers/verifyTokenControllers.js';

const router=express.Router();

router.post("/",verifyToken,createOrder)

router.put('/:id',verifyTokenAndAdmin,updateOrder)

router.delete("/:id",verifyTokenAndAdmin,deleteOrder)

router.get("/find/:userId",verifyTokenAndAuthorization,getUserOrder)

router.get("/",verifyTokenAndAdmin,getAllOrder)

router.get("/income",verifyTokenAndAdmin,getMonthlyIncome)

export default router