const express = require("express");
const path = require("path");
const session = require("express-session")
const cookieParser = require("cookie-parser");

const app4 = express();

app4.use(cookieParser());
app4.use(session({
    resave : false,
    saveUninitialized : false,
    cookie : {
        httpOnly : true,
    },
    name : "content.sid",
}))

app4.use((req,res,next)=>{
    req.data = "jang 비번 1회성"; // 1회성
    req.session.data = "jang 비번 지속" // 지속
});

app4.get("/", (req, res)=>{
    req.data; // jang 비번 1회성
    req.session.data // jang 비번 지속
    res.sendFile(path.join(__dirname, "index.html"));

})