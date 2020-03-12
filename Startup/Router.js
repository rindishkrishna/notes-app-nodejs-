module.exports=function (app) {
    const express = require('express');
    const Router1 = require('../Routes/GenreRoute');
    const error = require('../Middleware/Errors');
    const Router2 = require('../Routes/CustomerRoute');
    const Router3 = require('../Routes/MovieRoute');
    const register = require('../Routes/RegisterRoute');
    const login = require('../Routes/LoginRoute');

    app.use(express.json());
    app.use('/genres', Router1);
    app.use('/customers', Router2);
    app.use('/Movies', Router3);
    app.use('/Register', register);
    app.use('/login', login);
    app.use(error);
};
