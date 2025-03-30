import mongoose, { Types } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{ 
        type:String,
        required:true,
        minlength:[6,'Password must be at least 6 characters long'],
        select:false
    },
});

adminSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

adminSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

adminSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const AdminModel = mongoose.model('Admin', adminSchema);

export default AdminModel;