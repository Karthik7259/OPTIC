import express from 'express';
import {body} from "express-validator"
import { registerAdmin,loginAdmin,profileAdmin } from '../controller/admin.controller.js';
import { authAdmin } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/register',[  
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
], registerAdmin);

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],loginAdmin)

router.get('/profile',
    profileAdmin
)



export default router;