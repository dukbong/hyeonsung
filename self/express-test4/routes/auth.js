const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

router.post("/join", async (req, res,next)=>{
    const {email, password, address} = req.body;
    try{
        const exUser = await User.findOne({
            where : {
                "email" : email,
            }});
        if(exUser){
            return res.redirect("/join?exit=err");
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            password : hash,
            address,
        });
        return res.redirect("/");
    }catch(err){
        console.log(err);
        return next(err);
    }
});

module.exports = router;