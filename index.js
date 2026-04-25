 import express from "express"
import dotenv from "dotenv"
import { userRouter } from "./routes/user.js";
import { courseRouter } from "./routes/course.js";
dotenv.config();
const app=express();
app.use("/user",userRouter);
app.use("/course",courseRouter);



app.listen(process.env.PORT||3000,()=>{
  console.log("your app is listening on ",process.env.PORT);
  
})


