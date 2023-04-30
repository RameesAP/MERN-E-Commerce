import express from 'express'
import { getall } from '../controllers/userControllers.js';

const router=express.Router();

router.get('/usertest',getall)


export default router