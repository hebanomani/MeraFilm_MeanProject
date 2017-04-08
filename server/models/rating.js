var mongoose = require('mongoose');

var RatingSchema = mongoose.Schema({
    Title : String,
    Rating : String
});

module.exports = mongoose.model('Rating',RatingSchema);
