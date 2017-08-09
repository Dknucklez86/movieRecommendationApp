(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  var db = mongojs('movieRec', ['movieRecs']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/api/movieRecs', function(req, res) {
    db.movieRecs.find(function(err, data) {
      res.json(data);
    });
  });

  router.post('/api/movieRecs', function(req, res) {
    db.movieRecs.insert(req.body, function(err, data) {
      res.json(data);
    });

  });

  router.put('/api/movieRecs', function(req, res) {

    db.movieRecs.update({
      _id: mongojs.ObjectId(req.body._id)
    }, {
      title: req.body.title,
      releaseDate: req.body.releaeDate,
      duration: req.body.duration,
      genre: req.body.genre,
      synopsis: req.body.synopsis
    }, {}, function(err, data) {
      res.json(data);
    });

  });

  router.delete('/api/movieRecs/:_id', function(req, res) {
    db.movieRecs.remove({
      _id: mongojs.ObjectId(req.params._id)
    }, '', function(err, data) {
      res.json(data);
    });

  });

  module.exports = router;

}());
