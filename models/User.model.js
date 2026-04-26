import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
  email:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true,

  },
  firstName:{
    type:String,
    require:true
  },
  lastName:{
    type:String,
    require:true
  }
})

export const usermodel=mongoose.model("user",userSchema);