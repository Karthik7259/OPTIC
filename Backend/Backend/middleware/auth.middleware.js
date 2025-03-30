import UserModel from "../models/user.model.js";
import BlacklistToken from "../models/BlacklistToken.model.js";
import AdminModel from "../models/admin.model.js";
import bcrpyt from"bcrypt"
import jwt from "jsonwebtoken"

const authuser = async (req,res,next) => {
    const token=req.cookies.token || ( req.headers.authorization?.split(' ')[1]);
    console.log(token)
    if(!token){
        return res.status(401).json({message:'unauthorized'});
    }
    // console.log(token)
    const isBlacklisted=await BlacklistToken.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorized'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await UserModel.findById(decoded.id);        

        req.user=user;

       return next();
    }catch(err){
        return res.status(401).json({message:'unauthorized'})
    }
}

const authAdmin=async (req,res,next)=>{
    const token=req.cookies.token || (req.headers.authorization?.split(' ')[1]);
    console.log(token)
    if(!token){
        return res.status(401).json({message:'unauthorized'});
    }
    const isBlacklisted=await BlacklistToken.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorized'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const Admin=await AdminModel.findById(decoded.id);        

        req.Admin=Admin;

       return next();
    }catch(err){
        return res.status(401).json({message:'unauthorized'})
    }
}

export {authuser,authAdmin};