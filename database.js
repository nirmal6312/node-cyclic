const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://technoglobe63:0zGY20ZYAfycoevq@cluster0.fpynqfv.mongodb.net/",{
    family:4
}).then(()=>{
    console.log("connected successfullyy")
}).catch((e)=>{
    console.log(e , "error")
})