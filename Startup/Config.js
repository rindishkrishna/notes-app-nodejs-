require('dotenv').config();

module.exports=function () {
    if(!process.env.PRIVATEKEY){
        console.error('private key not found');
        process.exit(1);
    }
};
