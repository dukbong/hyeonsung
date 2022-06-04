const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT||3000);

app.use((req,res,next)=>{
    console.log("언제나 실행되는 미들웨어");
    next();
}); // 특정 url이 없다면 모든 곳에서 미들웨어 사용된다.

app.use("/category/java",(req,res,next)=>{
    console.log("자바에 들어갔습니다.");
    next();
}); // 특정 url에서만 미들웨어 사용하기

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./index.html"));
})

app.get("/category/:name", (req,res)=>{
    res.send(`나는 와일드 카드지롱! ${req.params.name}`);
})

// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"404.html"));
// });

app.use((req,res,next)=>{
res./*.status(200). 생략되있음*/sendFile(path.join(__dirname,"./404.html"));
});
// 에러는 조절이 가능하다.

app.use((err,req,res,next)=>{
    console.error(err);
    res.send("알수 없는 오류가 발생했습니다.");
})

app.listen(app.get("port"),()=>{
    console.log("express server go...");
});