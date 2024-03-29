const express = require("express")
const database = require("./database")
const bodyParser=require("body-parser");
const cors=require("cors");
const SignupUser = require("./models/user");


const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.post("/emp-post",async(req,res)=>{
    let user =new SignupUser()
    user.name=req.body.name;
   const doc= await user.save()
   console.log(doc)
    console.log(req.body)
    res.json(req.body)
    try{
        if(user){
            res.status(200).json({
                doc:doc,
                status:true,
                message:"User Created...!"
            })
        }
        else{
            res.status(404).json({
                error:err,
                message:"Something went wrong"
            });
        }
    }catch(err){ 
console.log(err)
    }
   
});
app.get("/",async(req,res)=>{
 const myusers = await SignupUser.find()
 res.send(myusers)
})


app.listen(port,()=>{
    console.log(`port started on ${port}`)
})