const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/", (req, res)=>{
    const {name} = req.body;
    return console.log(name);
});

app.listen(app.set("port"),()=>{
    console.log(`${app.set("port")}에서 대기중`);
});