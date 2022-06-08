const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.route("/")
    .post(async(req, res, next)=>{
        try{
            console.log("★★★★★req.body : ",req.body);
            const users = User.create({
                name : req.body.name,
                comment : req.body.comment,
            });
            console.log(users);
            res.status(201).json(users);
        } catch(err){
            console.log("★★★★★req.body : ",req.body);
            console.error(err);
            next(err);
        }
    });

    module.exports = router;