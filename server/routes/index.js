(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  var db = mongojs('movieRec', ['movierecs']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/api/movierecs', function(req, res) {
    db.movierecs.find(function(err, data) {
      res.json(data);
    });
  });

  router.post('/api/movierecs', function(req, res) {
    db.movierecs.insert(req.body, function(err, data) {
      res.json(data);
    });

  });

  router.put('/api/movierecs', function(req, res) {

    db.movierecs.update({
      _id: mongojs.ObjectId(req.body._id)
    }, {
      title: req.body.title,
      releaseDate: req.body.date,
      duration: req.body.duration,
      genre: req.body.genre,
      synopsis: req.body.synopsis,
      isRecommended: req.body.isRecommended
    }, {}, function(err, data) {
      res.json(data);
    });

  });



  module.exports = router;

}());
