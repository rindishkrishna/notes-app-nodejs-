const mongoose= require('mongoose');

const Schema = new mongoose.Schema({
    text: {type:String,
        required:true},

});
const notes = mongoose.model('Notes',Schema);
module.exports =notes;
