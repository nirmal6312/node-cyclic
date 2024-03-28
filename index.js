const express = require("express")

const app = express()
const port = 3000


app.get("/",(req,res)=>{
    res.send([
        {
            name:"nirmal kumarv"
        }
    ])
})
app.listen(port,()=>{
    console.log(`port started on ${port}`)
})