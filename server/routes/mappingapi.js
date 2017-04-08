var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var bodyParser = require('body-parser');
var router = express.Router();
// var theatre = require('../models/addtheatre.js');
// var Movie = require('../models/addmovies.js');
var MovieMapping = require('../models/mapping.js');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());


router.route('/moviemapping').get(function(req, res) {
  MovieMapping.find({}, function (err, docs) {
  res.json(docs);
  //console.log("Movie Mapping" +docs);
  });
});
router.route('/selmovie/:t').get(function(req, res) {
MovieMapping.find({Theatre:req.params.t},function(err, Data) {
    if (err) {
      console.log("Select Movie" +err);
      return res.send(err);
    }
    res.send(Data);
  });
});
router.route('/selmoviename/:m').get(function(req, res) {
MovieMapping.find({Title:req.params.m},function(err, Data) {
    if (err) {
      console.log("Select MOvie Name" +err);
      return res.send(err);
    }
    res.send(Data);

  });
});

router.delete('/deleteMapping/:id',function(req, res){
  MovieMapping.remove({_id:req.params.id},function(err, docs){
    console.log('Mapping Removed Successfully');
  });
});

router.post('/newMapping', function (req, res) {
  var mapping = new MovieMapping({
    Title: req.body.Title,
    City: req.body.City,
  Theatre: req.body.Theatre,
    ShowDate : req.body.ShowDate,
    ShowTimings: req.body.ShowTimings
  });
  mapping.save(function(err,docs){
    console.log('Mapping Saved Successfully'+docs);

  });
});



module.exports = router;
