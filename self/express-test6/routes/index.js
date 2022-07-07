const express = require("express");

const router = express.Router();

router.get("/",(req, res, next)=>{
    try{
        res.render("first");
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.get("/join",(req, res, next)=>{
    try{
        res.render("join");
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;