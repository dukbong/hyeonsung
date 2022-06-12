const express = require("express");
const Box = require("../models/box");
const router = express.Router();

router.route("/")
    .get(async (req,res,next)=>{
        try{
            const boxes = await Box.findAll();
            res.json(boxes);
        }catch(err){
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next)=>{
        try{
            const boxes = await Box.create({
                product_name : req.body.product_name,
                box_size : req.body.box_size,
            });
            console.log(boxes);
            res.status(201).json(boxes);
        }catch(err){
            next(err);
        }
    });

module.exports = router;