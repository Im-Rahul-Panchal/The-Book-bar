import express from 'express';
import { submit } from '../controller/contact.controller.js'

const router = express.Router();

//Endpoints
router.post("/submit" , submit);

export default router;