import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './db/db.js';
import userRoutes from './routes/user.routes.js'
import adminRoutes from './routes/admin.routes.js'

import cors from "cors"
import cookieParser from 'cookie-parser';
// import rideRoutes from './routes/ride.routes.js'
connectDB();
const app=express();



app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/user',userRoutes)
app.use('/admin',adminRoutes)


app.get('/',(req,res)=>{    
        res.send('Hello World');
}
);

export default app;