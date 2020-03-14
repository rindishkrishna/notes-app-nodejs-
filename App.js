const express = require("express");
const app =express();
const logger =require('./Startup/Logging');
const path =require('path');
const notes =require('./Models/Notes');

require('./Startup/Config')();
require('./Startup/Prod')(app);
require('./Startup/Db')();
require('./Startup/Router')(app);

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');
app.get('/',async function (req, res) {
    const note = await notes.find();
    res.render('index', { title: 'Hey', message: note[0].text })
});

const port = process.env.PORT;
app.listen(port,()=>{
logger.info(`listening on ${port}`)
});
