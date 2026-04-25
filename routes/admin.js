import express from "express"
const adminRouter=express.Router();
adminRouter.post("/signup",(req,res)=>{
  res.json({
    message:"admin signup endpoint"
  })
})
adminRouter.post("/signin",(req,res)=>{
  res.json({
    message:"admin signin endpoint"
  })
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

