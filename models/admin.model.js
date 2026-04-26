import mongoose from "mongoose";


const adminSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,

  },
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  }

})
export const adminmodel=mongoose.model("admin",adminSchema);