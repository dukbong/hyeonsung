const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const exp = require("constants");

const app2 = express();

app2.set("port", process.env.PORT || 3000);

app2.use(morgan("dev"));
app2.use(cookieParser());
app2.use(express.json());
app2.use(express.urlencoded({extended:true}));

app2.use((req,res,next)=>{
    console.log("모든 요청에 실행하는 Console");
    next();
},(req, res)=>{
    try{
        console.log("Error Found!");
    } catch (error){
        next(error);
    }
});

app2.get("/", (req, res)=>{
    req.cookies;
    res.cookie("name",encodeURIComponent(name),{
        expires : new Date(),
        httpOnly : true,
        path : "/",
    });
    res.sendFile(path.join(__dirname, "index.html"))
});

app2.use((req, res, next)=>{
    res.send("404Page...");
})

app2.use((error, req, res, next)=>{
    console.error(err);
    res.send("Error 발생했지만 상세내용은 안알려줍니다.");
});

app2.listen("port",(req,res)=>{
    console.log("app2 server ...");
});