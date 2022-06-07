const passport = require("passport");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const User = require("../models/user");

module.exports = ()=>{
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });
    // req.login(user)에서 이쪽으로 넘어온다.
    //7번 줄 실행되는데 serializeUser(user)에서 user는 routes/auth req.login(user)의 user다.
    //done(null,user.id) >> 세션에 user의 id만 저장
    //9반 줄 까지 실행됬으면 다시 routes/auth로 이동한다.

    passport.deserializeUser((id, done)=>{
        User.findOne({where : {id}})
            .then((user)=>done(null,user))
            .catch((err)=>done(err));
    });

    local();
    kakao();
}