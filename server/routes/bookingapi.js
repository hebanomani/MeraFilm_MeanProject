var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var bodyParser = require('body-parser');
var router = express.Router();
var Booking = require('../models/booking.js');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());


router.post('/newTicket/:t/:c/:t1/:s/:sno/:sq/:a/:n/:e/:p/:d/:cd', function (req, res) {
  var booking = new Booking({
    Title: req.params.t,
    City: req.params.c,
    Theatre: req.params.t1,
    Show: req.params.s,
    SeatNo:JSON.parse(req.params.sno),
    Quantity: req.params.sq,
    Amount: req.params.a,
    Name : req.params.n,
    Email: req.params.e,
    Phone: req.params.p,
    GDate:req.params.d,
   CurrentDate:req.params.cd,
  });
  booking.save(function(err,docs){
    console.log('Booking Saved Successfully' +docs);
  });
});

router.get('/bookedseats/:t/:th/:s/:d', function (req, res) {
  Booking.find({Title:req.params.t,Theatre:req.params.th,Show:req.params.s,GDate:req.params.d}, function (err, docs) {

    //res.json(docs);
    //console.log(docs);
    if(err){
      console.log('Error ' +err);
    }
    else{
    console.log('booked seats' +docs);
    res.json(docs);
  }
    });
});

/*router.get('/bookedid/:cd/:m', function (req, res) {
  Booking.find({CurrentDate:req.params.cd,Title:req.params.m}, function (err, docs) {
    res.json(docs);
    });
});
*/
module.exports = router;
