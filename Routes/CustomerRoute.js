const express= require('express');
const Router2 = express.Router();
const Customer =require('../Models/Customer');
const asyncvalidator =require('../Middleware/Async');
const { check, validationResult } = require('express-validator');

Router2.get('/',asyncvalidator(async (req,res)=>{
    const genre= await Customer.find();
    res.send(genre)
}));

Router2.get('/:id',asyncvalidator(async (req,res)=>{
    const gen = await Customer.findById(req.params.id);
    console.log(gen);
    if(!gen) return res.status(404).send("not found");
    res.send(gen);
}));

Router2.post('/',asyncvalidator([check('name').isLength({min:3})],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(422).json(errors.array() );
    const gen = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
    await gen.save();
    res.send(gen);
}));

Router2.put('/:id',asyncvalidator(async (req,res)=>{
    const gen = await Customer.findByIdAndUpdate(req.params.id , {
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    }, { new: true });
    if(!gen) return res.status(404).send("mot found");
    res.send(gen);
}));

Router2.delete('/:id',asyncvalidator(async (req,res)=>{
    const gen = await Customer.findByIdAndDelete(req.params.id );
    if(!gen) return res.status(404).send("mot found");
    res.send(gen);
}));

module.exports=Router2;
