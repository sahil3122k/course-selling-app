import express from "express"
const app=express();
const courseRouter=app.router();


courseRouter.get("/preview",(req,res)=>{
  res.json({
    message:"courses endpoint"
  })
})
courseRouter.post("/purchase",(req,res)=>{
  res.json({
    message:"purchase endpoint"
  })
})
export {courseRouter};