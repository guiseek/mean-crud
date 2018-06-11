var express = require('express');
var router = express.Router();
var User = require('../models/users');
router.get('/', function(req, res, next) {
  User.find({}).exec((err, users) => {
    res.json(users);
  });
});
router.put('/:id', function(req, res) {
  var user = req.body;
  user.alterado_em = new Date();
  User.update({_id: req.params.id}, user, function(err, data) {
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
  user.criado_em = new Date();
  user.alterado_em = new Date();
  user.save(err => {
    res.json({message: 'Criado'});
  });
});
module.exports = router;
