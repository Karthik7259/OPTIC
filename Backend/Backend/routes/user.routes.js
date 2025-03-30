import express from 'express';
import { body } from 'express-validator';
import {registerUser,loginUser, logoutuser} from '../controller/user.controller.js';
import { authuser } from '../middleware/auth.middleware.js';
import {getuserProfile} from '../controller/user.controller.js'

const router = express.Router();

router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],loginUser)


router.get('/profile',getuserProfile)

router.get('/logout',authuser,logoutuser)

export default router