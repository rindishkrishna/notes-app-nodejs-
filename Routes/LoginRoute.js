const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const express= require('express');
const Router = express.Router();
const register =require('../Models/Register');
const { check, validationResult } = require('express-validator');
Router.get('/',async (req,res)=>{
    const reg = await register.find();
    res.send(reg);
});

Router.post('/',[check('email').isEmail(),
    check('password','password is required').not().isEmpty()
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(422).json(errors.array() );
    let user = await register.findOne({email:req.body.email});
    if(!user) return res.status(400).send("invalid email or passowrd");
    const valid= await  bcrypt.compare(req.body.password ,user.password);
    if(!valid) return res.status(400).send("invalid email or passowrd");
    const token = await jwt.sign({_id: user._id},'privateKey');
    res.send(token);
});
module.exports=Router;
