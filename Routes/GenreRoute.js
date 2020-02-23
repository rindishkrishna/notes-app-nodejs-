const express= require('express');
const Router = express.Router();
const {genres}=require('../Models/Genres');
const { check, validationResult } = require('express-validator');
Router.get('/',async (req,res)=>{
    const genre= await genres.find();
    res.send(genre)
});
Router.get('/:id',async (req,res)=>{
    const gen = await genres.findById(req.params.id);
    console.log(gen);
    if(!gen) return res.status(404).send("not found");
    res.send(gen);
});

Router.post('/',[check('name').isLength({min:3})],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(422).json(errors.array() );
    const gen = new genres({name:req.body.name});
   await gen.save();
    res.send(gen);
});

Router.put('/:id',async (req,res)=>{
    const gen = await genres.findByIdAndUpdate(req.params.id ,{name:req.body.name});
    if(!gen) return res.status(404).send("mot found");
    res.send(gen);
});

Router.delete('/:id',async (req,res)=>{
    const gen = await genres.findByIdAndDelete(req.params.id );
    if(!gen) return res.status(404).send("mot found");
    res.send(gen);
});

module.exports=Router;
