const mongoose =require('mongoose');

const GenreSchema = new mongoose.Schema(
    {
        name:{type:String }

    }
);
const genres = mongoose.model('Genre',GenreSchema);

module.exports={GenreSchema,genres};



