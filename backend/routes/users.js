var express = require('express');
var router = express.Router();
var User = require('../models/users');
router.get('/:id', function(req, res, next) {
  User.findOne({_id: req.params.id}).exec((err, user) => {
    res.json(user);
  });
});
router.get('/', function(req, res, next) {
  User.find({}).exec((err, users) => {
    res.json(users);
  });
});
router.put('/:id', function(req, res) {
  var user = req.body;
  user.alterado_em = new Date();
  User.update({_id: req.params.id}, user, function(err, data) {
    if (err) {
      return res.status(400).json({message: 'Erro ao alterar usuário'});
    }
    res.json({message: `Usuário ${user.nome} alterado`});
  });
});
router.delete('/:id', function(req, res) {
  User.remove({_id: req.params.id}, function(err, data) {
    res.json({message: 'Usuário removido'});
  });
});
router.post('/search', function(req, res, next) {
  query = {};
  query[req.body.field] = new RegExp(req.body.term, 'i');
  User.find(query).exec((err, results) => {
    res.json(results);
  });
});
router.post('/', function(req, res, next) {
  var user = new User(req.body);
  user.criado_em = new Date();
  user.alterado_em = new Date();
  user.save(err => {
    if (err) {
      return res.status(400).json({message: 'Erro ao criar usuário'});
    }
    res.json({message: `Usuário ${user.nome} criado`});
  });
});
module.exports = router;
