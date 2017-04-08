var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var path = require('path');
var passport = require('passport');
var app = express();
var MovieRoute = require('./server/routes/addmoviesapi.js');
var TheatreRoute = require('./server/routes/addtheatreapi.js');
var MappingRoute = require('./server/routes/mappingapi.js');
var BookingRoute = require('./server/routes/bookingapi.js');
var UserRoute = require('./server/routes/userRoute.js');


app.use('/', express.static(path.join(__dirname, './client')));
mongoose.connect('mongodb://localhost:27017/merafilm-dev');
var db = mongoose.connection;

db.on('open', function() {
    console.log('App is connected to database');
});

db.on('error', function(err) {
    console.log(err);
});

app.use(session({
    secret: 'secrettexthere',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', UserRoute);
app.use('/api1', MovieRoute);
app.use('/api2', TheatreRoute);
app.use('/api3', MappingRoute);
app.use('/conapi', BookingRoute);


app.listen(4000,function(req,res){
  console.log('server is running on port 4000');
});
