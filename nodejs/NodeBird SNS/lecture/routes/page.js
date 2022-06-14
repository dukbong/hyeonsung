const express = require("express");
const { Post, User } = require("../models");

const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user = null,
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get("/profile",(req,res)=>{
    res.render("profile",{title : "내정보 - NodeBird"});
});

router.get("/join",(req, res)=>{
    res.render("join", {title : "회원가입 - NodeBird"});
});

router.get("/",async (req, res, next)=>{
    try{
        const posts = await Post.findAll({
            include : {
                model : User,
                attributes : ["id", "nick"],
            },
            order : [["createdAt", "DESC"]],
        });
        res.render("main",{
            title : "NodeBird",
            twits : posts,
            user : req.user,
        });
    }  catch(err){
        console.error(err);
        next(err);
    }
});


module.exports = router;