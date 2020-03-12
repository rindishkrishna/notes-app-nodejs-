const winston = require('winston');
require('winston-mongodb');
const Logger =winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'Error.log',
            level: 'info'
        }),
        winston.add(new winston.transports.MongoDB({
            db:'mongodb://localhost/logs',
            options: {useUnifiedTopology: true}
        }))
    ]
});
winston.exceptions.handle(
    new winston.transports.File({
        filename: 'uncaughtExceptions.log',
        level: 'info'
    }),
);
process.on('unhandledRejection', (ex) => {
    throw ex;
});

module.exports=Logger;


