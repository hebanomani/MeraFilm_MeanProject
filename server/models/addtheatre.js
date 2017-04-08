var mongoose = require('mongoose');
var TheatreSchema = mongoose.Schema({
  th_nm: String,
  city: String
});

module.exports = mongoose.model('theatre',TheatreSchema);
