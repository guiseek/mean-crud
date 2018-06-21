var mongoose = require('mongoose')
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  idade: Number,
  ativo: Boolean,
  email: {
    type: String,
    // unique: true,
    required: true
  },
  hash: String,
  salt: String,
  criado_em: Date,
  alterado_em: Date
});

passport.use(new LocalStrategy({
  usernameField: 'email'
},
function(username, password, done) {
  User.findOne({ email: username }, function (err, user) {
    if (err) { return done(err); }
    // Return if user not found in database
    if (!user) {
      return done(null, false, {
        message: 'User not found'
      });
    }
    // Return if password is wrong
    if (!user.validPassword(password)) {
      return done(null, false, {
        message: 'Password is wrong'
      });
    }
    // If credentials are correct, return the user object
    return done(null, user);
  });
}
));
schema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

schema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

schema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};
var model = mongoose.model('users', schema);
module.exports = model;
