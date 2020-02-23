const mongoose= require('mongoose');
const {GenreSchema} =require('./Genres');
const Schema = new mongoose.Schema({
    title:{type:String},
    genre: {type: GenreSchema, required:true},
    numberInStock:{type:Number},
    dailyRentalRate:{type:Number},


});
const Movies = mongoose.model('Movies',Schema);
module.exports =Movies;
