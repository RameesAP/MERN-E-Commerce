import express from 'express'
import { verifyToken } from '../controllers/verifyTokenControllers';

const router=express.Router();
router.get('/:id',verifyToken)

export default router
