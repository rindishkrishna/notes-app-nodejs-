const express = require("express");
const app =express();
const Router1 = require('./Routes/GenreRoute');
const Router2 = require('./Routes/CustomerRoute');
const Router3 = require('./Routes/MovieRoute');
const register = require('./Routes/RegisterRoute');
const login = require('./Routes/LoginRoute');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/genres",{ useNewUrlParser: true,  useUnifiedTopology: true ,useFindAndModify:false } )
    .then(()=>console.log('connected to mongo db'))
    .catch((err)=>console.log(err));
app.use(express.json());
app.use('/genres',Router1);
app.use('/customers',Router2);
app.use('/Movies',Router3);
app.use('/Register',register);
app.use('/login',login);
const port = process.env.PORT || "8000";

app.listen(port,()=>{
    console.log("listening")
});
