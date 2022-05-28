const express = require("express");
const path = require("path");

const app3 = express();

app3.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"index.html"));
    next("route");
},(req, res)=>{
    console.log("실행이 되지 않습니다.");
});

app3.get("/", (req, res)=>{
    console.log("실행이 됩니다.");
});

/*
next("route")를 하면 바로 밑에 코드를 실행하지 않고 같은 가진 라우터를 찾아 갑니다.
그럼 왜 저 밑에 코드를 적냐? 실제로는 어떤식으로 사용되나요?

app3.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"index.html"));
    if (true){
        next("route");
    } else {
        next();
    }
},(req, res)=>{
    console.log("false면 이게 실행된다~");
});

app3.get("/", (req, res) => {
    console.log("true면 이게 실행된다~");
});

*/