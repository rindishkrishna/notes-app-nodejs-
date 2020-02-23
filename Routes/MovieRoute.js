const express= require('express');
const Router3 = express.Router();
const Movies =require('../Models/Movies');
const {genres} = require('../Models/Genres');
const { check, validationResult } = require('express-validator');
Router3.get('/',async (req,res)=>{
    const genre= await Movies.find();
    res.send(genre)
});
Router3.get('/:id',async (req,res)=>{
    const gen = await Movies.findById(req.params.id);
    if(!gen) return res.status(404).send("not found");
    res.send(gen);
});

Router3.post('/',async (req,res)=>{
    const genre = await genres.findById(req.body.genreid);
    if (!genre) return res.status(400).send('Invalid genre.');

    let movie = new Movies({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();

    res.send(movie);
});


Router3.put('/:id', async (req,res)=> {
    const genre = await genres.findById(req.body.genreid);
    if (!genre) return res.status(400).send('Invalid genre.');
    const m= await Movies.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    if (!m) return res.status(404).send('The movie with the given ID was not found.');
    res.send(m);
});

Router3.delete('/:id', async (req,res)=> {
    const genre = await genres.findById(req.body.genreid);
    if (!genre) return res.status(400).send('Invalid genre.');
    const m= await Movies.findByIdAndDelete(req.params.id,{
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    if (!m) return res.status(404).send('The movie with the given ID was not found.');
    res.send(m);
});

module.exports=Router3;
