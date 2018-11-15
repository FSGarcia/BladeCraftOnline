var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/users', function(req, res, next) {
  User.find(function(err, comments){
    if(err){ return next(err); }
    res.json(comments);
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get username


// make attack

module.exports = router;
