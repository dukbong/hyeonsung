const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("passport");

const router = express.Router();

router.post("/join", async (req, res,next)=>{
    const {email, password, address} = req.body;
    try{
        const exUser = await User.findOne({
            where : {
                "email" : email,
            }});
        if(exUser){
            return res.redirect("/join?exit=exist");
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            password : hash,
            address,
        });
        return res.redirect("/");
    }catch(err){
        console.log(err);
        return next(err);
    }
});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info)=>{
        console.log("ㅁㅁㅁㅁ",err, user, info,"ㅁㅁㅁㅁ");
        if(err){
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info);
        }
        return req.login(user, loginErr =>{
            if(loginErr){
                console.error(loginErr);
                return next(loginErr);
            }
            return res.redirect("/main");
        });
    })(req, res, next);
});

module.exports = router;