import AdminModel from "../models/admin.model.js";

export const createAdmin = async ({
    fullname,
    email,
    password,
}) => {
    if ( !email || !password ) {
        throw new Error('All fields are required');
    }

    const Admin = AdminModel.create({
        fullname,
        email,
        password,  
    });

    return Admin;
}
export default createAdmin;