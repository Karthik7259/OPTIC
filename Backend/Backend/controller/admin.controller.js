import AdminModel from "../models/admin.model.js";
import { validationResult } from "express-validator";
import {createAdmin}  from "../service/admin.serivce.js"



const registerAdmin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const { fullname, email, password } = req.body;

    const isAdmin = await AdminModel.findOne({ email });
    console.log(isAdmin)
    if (isAdmin) {
        return res.status(400).json({ message: 'Admin already exists' });
    }
    const hashedPassword = await AdminModel.hashPassword(password);
    const Admin = await createAdmin({
        fullname,
        email,
        password: hashedPassword,
    });
    console.log(Admin)
    const token = Admin.generateAuthToken();
    res.status(201).json({ token, Admin });
    console.log(Admin)
}

const loginAdmin = async (req, res,next) => {
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()
      });
  }
  const { email, password } = req.body;
  console.log(email,password)

  const Admin = await AdminModel.findOne({ email }).select('+password');
  console.log(Admin)
  if (!Admin) {
      return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await Admin.comparePassword(password);
  if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = Admin.generateAuthToken();
  res.cookie('token', token)
  res.status(200).json({ token, Admin })
}

const profileAdmin = async (req, res,next) => {
    const Admin = await AdminModel.findOne();
       res.status(200).json({ Admin })
}


export {registerAdmin,loginAdmin,profileAdmin}