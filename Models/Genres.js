const mongoose =require('mongoose');

const GenreSchema = new mongoose.Schema(
    {
        name:{type:String
        ,required:true
        }

    }
);
const genres = mongoose.model('Genre',GenreSchema);

module.exports={GenreSchema,genres};



