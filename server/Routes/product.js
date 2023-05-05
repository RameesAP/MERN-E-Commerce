import express from 'express'
import { createPost, deletePost, getAllProducts, getProduct, updatePost } from '../controllers/productControllers.js';
import { verifyTokenAndAdmin } from '../controllers/verifyTokenControllers.js';

const router=express.Router();

router.post("/",verifyTokenAndAdmin,createPost)

router.put('/:id',verifyTokenAndAdmin,updatePost)

router.delete("/:id",verifyTokenAndAdmin,deletePost)

router.get("/find/:id",getProduct)

router.get("/",getAllProducts)

export default router
