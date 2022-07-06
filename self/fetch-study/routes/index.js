const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.render("index", {
      title: `${new Date().getFullYear()}-
      ${new Date().getDate() + 1}-
      ${new Date().getDate()}`,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      job: req.body.job,
    });
    console.log("데이터 베이스 저장 성공");
    res.redirect("/home");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/home", (req, res, next) => {
  try {
    res.render("home");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
