import mongoose  from "mongoose";
import dotenv from "dotenv"
dotenv.config()
 const connectDB=async()=>{
 try {
   await mongoose.connect(process.env.MONGODB_URL);
   console.log("successfully connected to mongodb!!");
   
   
 } catch (error) {
  console.log(error);
  
  
 }
 }
 export {connectDB};