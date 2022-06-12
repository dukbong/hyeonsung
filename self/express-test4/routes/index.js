const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/",async (req, res ,next)=>{
    try{
        const users = await User.findAll();
        res.render("index", {users});
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.get("/join",(req, res)=>{
    res.render("join");
});

module.exports = router;