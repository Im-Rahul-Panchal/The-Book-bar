import express from 'express';
import { login, signup } from '../controller/user.controller.js'

const router = express.Router();

//Endpoints
router.post("/signup" , signup);
router.post("/login" , login);

export default router;
