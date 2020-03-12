const logger = require('../Startup/Logging');
const mongoose = require('mongoose');
module.exports= function(){
    mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,  useUnifiedTopology: true ,useFindAndModify:false ,useCreateIndex: true} )
        .then(()=>logger.info('connected to mongo db'))
};
