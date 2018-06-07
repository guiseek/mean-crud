var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  nome: String
});
var User = mongoose.model('users', userSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}).exec((err, users) => {
    res.json(users);
  });
});
router.put('/:id', function(req, res) {
  User.update({_id: req.params.id}, req.body, function(err, data) {
    res.json({message: 'Alterado'});
  });
});
router.delete('/:id', function(req, res) {
  User.remove({_id: req.params.id}, function(err, data) {
    res.json({message: 'Removido'});
  });
});
router.post('/', function(req, res, next) {
  var user = new User(req.body);
  user.save(err => {
    res.json({message: 'Criado'});
  });
});

module.exports = router;
