const error = require('../Middleware/Errors');
const register = require('../Routes/RegisterRoute');
const login = require('../Routes/LoginRoute');
const notes= require('../Routes/NotesRoute');
const admin= require('../Routes/Admin');
const bodyParser = require('body-parser');
module.exports=function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use('/Register', register);
    app.use('/login', login);
    app.use('/notes', notes);
    app.use('/admin', admin);
    app.use(error);
};
