const mongoose= require('mongoose');
const {GenreSchema} =require('./Genres');
const Schema = new mongoose.Schema({
    title:{type:String },
    genre: GenreSchema,
    numberInStock:{type:Number},
    dailyRentalRate:{type:Number},


});
const Movies = mongoose.model('Movies',Schema);
module.exports =Movies;
