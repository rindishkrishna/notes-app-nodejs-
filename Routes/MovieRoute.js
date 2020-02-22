const express= require('express');
const Router3 = express.Router();
const Movies =require('../Models/Movies');
const Genre = require('../Models/Genres');
const { check, validationResult } = require('express-validator');
Router3.get('/',async (req,res)=>{
    const genre= await Movies.find();
    res.send(genre)
});
/*Router3.get('/:id',async (req,res)=>{
    const gen = await Movies.findById(req.params.id);
    console.log(gen);
    if(!gen) return res.status(404).send("not found");
    res.send(gen);
});*/

Router3.post('/',[check('title').isLength({min:3})],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(422).json(errors.array() );
    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');

    let movie = new Movie({
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

/*Router3.put('/:id',async (req,res)=>{
    const gen = await Movies.findByIdAndUpdate(req.params.id ,{title:req.body.title});
    if(!gen) return res.status(404).send("mot found");
    res.send(gen);
});

Router3.delete('/:id',async (req,res)=>{
    const gen = await Movies.findByIdAndDelete(req.params.id );
    if(!gen) return res.status(404).send("mot found");
    res.send(gen);
});*/

module.exports=Router3;
