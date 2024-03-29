const mongoose=require("mongoose")

const SignupSchema = new mongoose.Schema({
    name: String,
  }); 
  const SignupUser = mongoose.model('newemployes', SignupSchema);

  module.exports=SignupUser