const express = require("express");
const Box = require("../models/box");
const router = express.Router();

router.get("/",async (req,res,next)=>{
    try{
        const boxes = await Box.findAll();
        res.render("index",{boxes});
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;