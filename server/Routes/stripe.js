import express from 'express'
import { stripePost } from '../controllers/stripeControllers.js';
const router=express.Router();

router.post("/payment",stripePost)

export default router