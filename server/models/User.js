var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var userData = mongoose.Schema({
    FirstName: String,
    LastName: String,
    MobileNumber: String,
    Email: String,
    Password: String
});

//Encrypting Password
userData.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

//Decrypting Password
userData.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.Password);
}

module.exports = mongoose.model('User', userData, 'User');
