// 회원 가입 데이터 베이스에 저장~
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("./middleware");

const router = express.Router();

router.post("/join", isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect("/join?error=exist");
    }
    const hash = await bcrypt.hash(
      password,
      12 /*<-- 12는 보안 난이도라고 생각해도 됨. 높을수록 좋다.*/
    );

    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    // passport.authenticate("local") 까지만 먼저 실행되고
    // passport/localStrategy 파일을 읽기 시작한다.

    // done(?,?,?) 받은 후 (authError, user, info) 부터 실행

    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      // req.login(user) 까지만 실행되고
      // passport/index 파일을 읽기 시작한다.

      // done(null,user.id)를 가지고 (loginError)=>{}부터 실행된다.
      // 현재 error 자리가 null이다.
      // ★ req.login으로 인해 세션쿠키를 브라우저로 보낸다.
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect("/");
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get("/logout", (req, res) => {
  req.logout(req.user, err => {
    if(err) return next(err);
    res.redirect("/");
  });
});

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);
module.exports = router;
