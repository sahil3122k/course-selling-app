import express from "express";
import { userMiddleware } from "../middleware/user.middleware.js";
import { purchasemodel } from "../models/purchase.module.js";
import { coursemodel } from "../models/course.model.js";
const courseRouter=express.Router();


courseRouter.get("/purchase",userMiddleware,async(req,res)=>{
  const userId=req.userId;
  const courseId=req.body.courseId;
  await purchasemodel.create({
    userId,
    courseId
  })
res.json({
  message:"you have succefully bought the course"
})

})
courseRouter.post("/preview",async(req,res)=>{
  const courses=await coursemodel.find({});
  res.json({
    courses
  })
  
})
export {courseRouter};