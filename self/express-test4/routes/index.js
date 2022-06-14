const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/",async (req, res ,next)=>{
    try{
        const users = await User.findAll();
        res.render("index", {users});
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.get("/join",(req, res)=>{
    res.render("join");
});

router.get("/main", (req, res)=>{
    try{
        console.log("ㅂㅂㅂㅂ",req.user);
        res.render("main",{
            user : req.user,
            title : "로그인 성공",
        });
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;