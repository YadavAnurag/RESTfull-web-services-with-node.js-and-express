var express = require('express');
var Book = require('../models/bookModel');
var routes = function(){

var authorRouter = express.Router();

authorRouter.route('/')
  .post(function(req, res){
    var book = new Book(req.body);

    book.save();
    res.status(201).json(book);
  })
  .get(function (req, res) {
    var query = {};
    if(req.query.genre){
      query.genre = req.query.genre;
    }

    Book.find(query, function (err, books) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(books);
      }
    });
  });

authorRouter.route('/:bookId')
  .get(function(req, res){
    Book.findById(req.params.bookId, function(err, result){
      if(err){
        res.status(500).send(err);
      }else{
        res.json(result);
      }
    });
  });

  return bookRouter;
};

module.exports = routes;
