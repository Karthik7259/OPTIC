import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    // fullname field is optional and can be added later if needed
    fullname: {
        type: String,
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

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const UserModel = mongoose.model('User',userSchema);

export default UserModel;
