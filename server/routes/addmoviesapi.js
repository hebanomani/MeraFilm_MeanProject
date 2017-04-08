var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var cors=require('cors');
var router = express.Router();
var Movie = require('../models/addmovies.js');
var Rating = require('../models/rating.js');

//router.use(cors());

//router.options('*', cors())

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/rating/:m/:r', function (req, res) {
  var rating = new Rating({
    Title: req.params.m,
    Rating:req.params.r
  });
  rating.save(function(err,docs){
    console.log('Rating Saved Successfully');
  });
});

router.get('/getRating/:t', function (req, res) {
    Rating.find({Title:req.params.t}, function (err, docs) {
    //  console.log("From add movies api "+docs);
    res.json(docs);
    });
});

router.get('/movie', function (req, res) {
  // console.log(req);
  // res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type');
  //   if ('OPTIONS' == req.method) {
  //   res.sendStatus(200);
  //   } else {
  //     next();
  //   }
    Movie.find({}, function (err, docs) {
    res.json(docs);
    if(err){
      console.log(err);
     }
    });
});

router.get('/moviePoster/:t', function (req, res) {
    Movie.find({Title:req.params.t}, function (err, docs) {
      //console.log(docs);
    res.json(docs);
    if(err){
      console.log(err);
     }
    });
});

router.post('/newMovie', function (req, res) {
  // res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //   next();
  // res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type');
  //   if ('OPTIONS' == req.method) {
  //   res.sendStatus(200);
  //   } else {
  //     next();
  //   }
  var movie = new Movie({
    Title: req.body.Title,
    Year: req.body.Year,
    Runtime: req.body.Runtime,
    Genre: req.body.Genre,
    Director: req.body.Director,
    Actors: req.body.Actors,
    Language: req.body.Language,
    Poster: req.body.Poster,
    Plot:req.body.Plot,
    imdbRating: req.body.imdbRating,
    status:"false"
  });
  movie.save(function(err,docs){
    console.log('Movie Saved Successfully'+docs);
  });
});

router.delete('/deleteMovie/:id',function(req, res){
  Movie.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});

router.put('/updateMovie/:Title/:val',function(req,res){
Movie.findOneAndUpdate({ Title: req.params.Title },
  {
    $set:{status: req.params.val }
},function (err, data){
  res.json(data);
});
});


module.exports = router;
