import mongoose from "mongoose";

const surveySchema =  mongoose.Schema({
    name:{
      type:String},
    gender:{ type:String},
    nationality: {type:String},
    email: {type:String},
    phoneNumber: {type:Number},
    address: {type:String},
    message: {type:String},
  },
  {
    timestamps : true
  });
 
  
  
export const Survey = mongoose.model("Survey", surveySchema ) 

