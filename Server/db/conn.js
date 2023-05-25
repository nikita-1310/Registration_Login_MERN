const mongoose = require("mongoose")

const db = "mongodb+srv://nikita:nikitaagarwal@cluster0.yvsh5qw.mongodb.net/register?retryWrites=true&w=majority";

mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database is connected")).catch((e)=>console.log(e))