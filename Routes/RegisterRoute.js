const register =require('../Models/Register');
const bcrypt =require('bcrypt');
const express= require('express');
const Router = express.Router();
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
    if(user) return res.status(400).send("already have account");

    user= new register({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    const salt =await bcrypt.genSalt(5);
    user.password =await bcrypt.hash(user.password ,salt);
    const users = await user.save();
    res.send(users);
});
module.exports=Router;
