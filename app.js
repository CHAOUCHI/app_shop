const express = require("express")
const cors = require("cors")

const app = express()

app.get("/",(req,res)=>{
    res.json("Hello World")
});

app.listen(3000);