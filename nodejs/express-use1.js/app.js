const express = require("express");
const path = require(path);

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname),"index.html");
});

app.post("/",(req,res)=>{
    res.send("hello node");
});

app.get("/about", (req,res)=>{
    res.send("hello express");
});

app.listen(3000,()=>{
    console.log("express server...");
});