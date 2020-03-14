const express = require("express");
const app =express();
const logger =require('./Startup/Logging');
const path =require('path');

require('./Startup/Config')();
require('./Startup/Prod')(app);
require('./Startup/Db')();
require('./Startup/Router')(app);

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

const port = process.env.PORT;
app.listen(port,()=>{
logger.info(`listening on ${port}`)
});
