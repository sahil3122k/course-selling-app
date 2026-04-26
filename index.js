 import express from "express"
import dotenv from "dotenv"
import { userRouter } from "./routes/user.js";
import { courseRouter } from "./routes/course.js";
import { adminRouter } from "./routes/admin.js";
import { connectDB } from "./models/db.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);


connectDB().then( app.listen(process.env.PORT||3000,()=>{
  console.log("your app is listening on ",process.env.PORT);
  
})
)


