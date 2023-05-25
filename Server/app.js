const express = require("express")
const app = express()
const port = 9000;
require("./db/conn")
app.get('/',(req,res)=>{
res.status(200).send("send")
})

app.listen(port,()=>{
    console.log(`server is started`)
})