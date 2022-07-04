const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", async(req, res, next)=>{
    try{
        const user = await User.findAll();
        res.render("index", {user});
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.post("/login", async(req, res, next)=>{
    try{
        const user = await User.create({
            name : req.body.name,
            job : req.body.job,
        });
        console.log(user);
        console.log(req.body.name);
        console.log(req.body.job);
        res.redirect("/");
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;