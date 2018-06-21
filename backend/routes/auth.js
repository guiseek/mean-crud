var passport = require('passport');
var express = require('express');
var router = express.Router();
var User = require('../models/users');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
router.get('/profile', auth, function(req, res) {
  console.log(req.payload);
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    console.log(req.payload._id);
    User
      .findById(req.payload._id)
      // .find({_id: req.payload._id})
      .exec(function(err, user) {
        console.log('u: ', user);
        return res.status(200).json(user);
      });
  }
});
router.post('/register', function(req, res) {
  var user = new User(req.body);

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  console.log('user: ', user);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
});
router.post('/login', function(req, res) {
  passport.authenticate('local', function(err, user, info){
    var token;
    // If Passport throws/catches an error
    console.log(err)
    if (err) {
      res.status(404).json(err);
      return;
    }
    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
});
module.exports = router;
