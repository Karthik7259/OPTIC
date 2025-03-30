import UserModel from "../models/user.model.js";


export const createUser= async ({
    fullname,
    email,
    password
}) => {
    if( !email || !password){
        throw new Error('All fields are required');
    }

    const user=UserModel.create({
        fullname,
        email,
        password
    });
 return user;
}
