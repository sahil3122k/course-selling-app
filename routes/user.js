import express from "express"
const app=express();
const userRouter=app.router();


userRouter.post("/signup",(req,res)=>{
  res.json({
    message:"signup endpoint"
  })
})
userRouter.post("/signin",(req,res)=>{
  res.json({
    message:"signin endpoint"
  })
})

userRouter.get("/purchases",(req,res)=>{
  res.json({
    message:"purchases endpoint"
  })
})

export {userRouter}