const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const router = express.Router();

router.get("/",(req, res, next) => {
    try {
        res.render("main");
    } catch (err) {
        console.error(err);
        next(err);
    }
    });

router.get("/join",(req,res,next)=>{
    try{
        res.render("join");
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.get("/login",(req, res)=>{
    res.render("login");
});

router.post("/login",async (req,res,next)=>{
    passport.authenticate("local",(authError, user, info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return redirect(`/?loginError = ${info.message}`);
        }
        return req.login(user,(loginError)=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect("main");
        });
    });
    });


router.post("/join", async (req, res, next) => {
  const { email, password, nick } = req.body;
  try {
    const exEmail = await User.findOne({
      where: {email},
    });
    if (exEmail) {
      return res.redirect("error");
    }
    const hash = await bcrypt.hash(password, 12);
    const user = await User.create({
      email,
      password: hash,
      nick,
      //form 태그로 받을때는 html name="value" 값
    });
    console.log(user);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
