var mongoose = require('mongoose');
var BookingSchema = mongoose.Schema({
    Title : String,
    City : String,
    Theatre : String,
    Show : String,
    SeatNo : Array,
    Quantity : String,
    Amount : String,
    Name : String,
    Email : String,
    Phone : String,
    GDate:String,
 CurrentDate : String
});


module.exports = mongoose.model('Booking',BookingSchema);
