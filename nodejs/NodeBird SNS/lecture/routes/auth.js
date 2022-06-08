// 회원 가입 데이터 베이스에 저장~
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("../passport");

const router = express.Router();

router.post("/join", async(req, res, next)=>{
    const { email, nick, password } = req.body;
    try{
        const exUser = await User.findOne({where:{email}});
        if (exUser){
            return res.redirect("/join?error=exist");
        }
        const hash = await bcrypt.hash(password, 12/*<-- 12는 보안 난이도라고 생각해도 됨. 높을수록 좋다.*/);
        
        await User.create({
            email,
            nick,
            password : hash,
        });
        return res.redirect("/");    
    }catch(err){
        console.error(err);
        return next(err);
    }
});

router.post("/login",(req, res, next)=>{
    passport.authenticate("local", (authError, user, info)=>{
        // passport.authenticate("local") 까지만 먼저 실행되고
        // passport/localStrategy 파일을 읽기 시작한다.

        // done(?,?,?) 받은 후 (authError, user, info) 부터 실행
         
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if (!user){
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user,(loginError)=>{
            // req.login(user) 까지만 실행되고
            // passport/index 파일을 읽기 시작한다.

            // done(null,user.id)를 가지고 (loginError)=>{}부터 실행된다.
            // 현재 error 자리가 null이다.
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect("/"); //세션 쿠기를 브라우저로 보내준다.
        });
    })(req, res, next);
});

router.get("/logout", (req,res)=>{
    req.logout();
    req.session.destroy();
    res.redirect("/");
});
module.exports = router;