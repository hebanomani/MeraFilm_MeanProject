var mongoose = require('mongoose');
var MappingSchema = mongoose.Schema({
    Title : String,
    City : String,
    Theatre : String,
    ShowDate : String,
    ShowTimings : Array,
});

module.exports = mongoose.model('MovieMapping',MappingSchema);
