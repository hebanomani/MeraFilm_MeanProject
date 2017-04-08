var mongoose = require('mongoose');
var MovieSchema = mongoose.Schema({
    Title : String,
    Year : String,
    Runtime : String,
    Genre : String,
    Director : String,
    Actors : String,
    Language : String,
    Poster : String,
    Plot:String,
    imdbRating : String,
    status :String
});


module.exports = mongoose.model('Movies', MovieSchema);
