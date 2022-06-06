const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.route("/")
    .get(async (req, res, next)=>{
        try{
            const users = await User.findAll();
            res.json(users);
        }catch(err){
            console.error(err);
            next(err);
        }
    })
    .post(async (req,res,next)=>{
        try{
            const users = await User.create({
                name : req.body.username,
                comment : req.body.usercomment,
            });
            console.log(users);
            res.status(201).json(users);
        }catch(err){
            console.error(err);
            next(err);
        }
    });

module.exports = router;