import express from "express"
import { adminmodel } from "../models/admin.model.js";
import dotenv from "dotenv";
import jwt from"jsonwebtoken";
import bcrypt from "bcrypt";
dotenv.config();
const adminRouter=express.Router();

adminRouter.post("/signup",async(req,res)=>{
   const { email, password, firstname, lastname } = req.body;
 
   try {
     const hashedPassword = await bcrypt.hash(password, 10);
 
     await adminmodel.create({
       email:email,
       password: hashedPassword,
       firstName: firstname,
       lastName: lastname
     });
 
     res.json({ message: "Signup successful" });
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
})
adminRouter.post("/signin",async(req,res)=>{
    const { email, password } = req.body;
  
    try {
      const admin = await adminmodel.findOne({ email });
      if (!admin) {
        return res.status(403).json({ message: "Incorrect credentials1" });
      }
  
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(403).json({ message: "Incorrect credentials2" });
      }
  
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRATE_PASS_A, {
        expiresIn: "1h"
      });
  
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
})

adminRouter.post("/course",(req,res)=>{
  res.json({
    message:"course posting endpoint"
  })
})
adminRouter.put("/course",(req,res)=>{
  res.json({
    message:"course changing endpoint"
  })
})
adminRouter.get("/course/bulk",(req,res)=>{
  res.json({
    message:"course geting endpoint"
  })
})
export{adminRouter}

