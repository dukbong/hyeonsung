const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.route("/")
    .get(async(req,res,next)=>{
        try{
            const user = await User.findAll();
            res.render("index", {user});
            console.log("=========================================");
            for (let i = 0; i < user.length; i++){
                console.log(user[i].name);
            }
            console.log("=========================================");
        }catch(err){
            console.error(err);
            next(err);
        }
    })
    .post(async(req,res,next)=>{
        try{
            const {name} = req.body;
            const exuser = await User.findOne({
                where : {name},
            });
            if (!exuser){
                const user = await User.create({
                    name : req.body.name,
                    age : req.body.age,
                    married : req.body.married,
                    comment : req.body.comment,
                });
                console.log(user.User);
                res.status(201);
                res.render("index");
            } else{
                res.redirect("/");
            }
        }catch(err){
            console.error(err);
            next(err);
        }
    });

router.get("/:name",async(req, res, next)=>{
    try{
        const {name} = req.params;
        const user = await User.findOne({
            where : {name},
        });
        if (!user){
            res.send("찾으시는 이름은 없습니다.");
        }else{
            res.send(`이름은 ${user.name} 나이는 ${user.age} 결혼여부는 ${user.married}`);
        }
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;