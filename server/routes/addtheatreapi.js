var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var bodyParser = require('body-parser');
var router = express.Router();
var theatre = require('../models/addtheatre.js');


 // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true})); // for parsing application/x-www-form-urlencoded
router.use(bodyParser.json());
// router.use(bodyParser.text({ type: "text/*"}));
//router.use(bodyParser.raw({ type: function () { return true } }));


router.get('/theatres', function (req, res) {
    theatre.find({}, function (err, docs) {
    //res.json(docs);
    if (err) {
          console.log('error from mongodb', err);
          //res.send('error retrieving data')
          // or however else you want to handle your error
        } else {
          res.json(docs);
        }
    });
});

router.post('/newTheatre', function (req, res) {
  var theatres = new theatre({
    th_nm: req.body.th_nm,
    city: req.body.city
  });
  theatres.save(function(err,docs){
    if(err){
      console.log('error while putting' +err);
    }
    else{
      console.log('Theatre Saved Successfully' +docs);
    }
  });
});

router.delete('/deleteTheatre/:id',function(req, res){
  theatre.remove({_id:req.params.id},function(err, docs){
    console.log('Theatre Removed Successfully');
  });
});




module.exports = router;
