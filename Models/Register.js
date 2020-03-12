const mongoose= require('mongoose');
const jwt = require('jsonwebtoken');

const Schema = new mongoose.Schema({
    name: {type:String,
        required:true},
    email:{type:String,
        required:true,
        unique:true,
    },
    password:{type:String,
        required:true,
    },
    confirmPassword:{type:String,
    required:true}
});
Schema.methods.auth =function(){
    return jwt.sign({_id: this._id},process.env.PRIVATEKEY);
};
const Register = mongoose.model('Register',Schema);
module.exports =Register;
