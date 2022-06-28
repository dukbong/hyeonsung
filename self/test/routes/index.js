const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/",(req,res)=>{
    const user = {name : "jang", "age": 30};
    res.cookie("User", user);
    console.log("쿠키생성완료");
    console.log("req.cookie : ",req.cookies);
    console.log("req.signedCookies : ",req.signedCookies);
    res.send("hello");
});

module.exports = router;