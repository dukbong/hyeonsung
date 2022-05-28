const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);
// 포트 설정

app.use ((req,res,next)=>{ // 미들웨어
    console.log("모든 요청에 실행하고 싶어요.");
    next();
});
// next를 해주지 않으면 아래 있는 라우터들을 실행하지 못한다.

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/",(req,res)=>{
    res.send("hello node");
});

app.get("/category/Javascript",(req,res)=>{
    res.send("hello Javascript");
});

app.get("/category/:name", (req,res)=>{
    res.send(`hello Wildcard`);
});
// /category/:name >> :name에 아무거나 집어넣어도 이게 실행된다.
// : 변수명<< 와일드 카드 
// 와일드 카드에 들어간 값을 쓰고 싶을때는  req.params.변수명
// 만약 /category/Javascript 에 대해 따로 만들고 싶다면
// 와일드 카드보다 위에 넣어줘야한다.
// 그러지 않으면 와일드 카드가 실행된다.

app.get("/about", (req,res)=>{
    res.send("hello express");
});

app.get("*",(req,res) => {
    res.send("hello everybody");
});
// get 요청에 모든 주소에 대해 답하는 방법
// 이게 가장 위쪽에 올라가면 어떤 주소를 쳐도 이게 나오기 때문에 조심해야한다.

app.listen(app.get("port"),()=>{
    console.log("express server...");
});

