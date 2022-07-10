const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/",(req, res, next)=>{
    try{
        res.render("first");
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.route("/join")
    .get((req, res, next)=>{
        try{
            res.render("join");
        }catch(err){
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next)=>{
        const{email, password, address, nick, lang, info} = req.body;
        try{
            const exEmail = await User.findOne({where:{email}});
            if (exEmail){
                return res.redirect("/join?error=exist");
            }
            if (!email || !password){
                return res.redirect("/join");
            }
            const hash = await bcrypt.hash(password, 12);
            await User.create({
                email,
                password : hash,
                address,
                nick,
                lang,
                info,
            });
            return res.redirect("/");
        } catch(err){
            console.log(err);
            return next(err);
        }
    });

router.route("/login")
    .get((req, res, next)=>{
        res.render("login");
    })
    .post((req,res,next)=>{
        // 여기까지는 잘 온다.
        passport.authenticate("local", (authError, user, info) => {
            console.log("aaaaaaaaaaaaaaaaaaaaa");
            if(authError){
                console.error(authError);
                return next(authError);
            }
            if(!user){
                return res.redirect(`/?loginError = ${info.message}`);
            }
            return req.login(user,(loginError)=>{
                if(loginError){
                    console.error(loginError);
                    return next(loginError);
                }
                return res.redirect("/main");
            });
        })(req,res,next);
    });

router.get("/main", (req, res, next)=>{
    res.render("main",{
        nick : req.user.nick,
        email : req.user.email,
        address : req.user.address,
        lang : req.user.lang,
    });
});

router.get("/logout", (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      req.session.destroy();
      res.redirect("/");
    });
  });
module.exports = router;