import mongoose from "mongoose";
const purchaseSchema=new mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    },
    courseId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"course"
    }


})
export const purchasemodel=mongoose.model("purchase",purchaseSchema);