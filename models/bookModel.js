var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookModel = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('Book', bookModel);







// var entry = new book(
//   {title:'The Time Machine',author: 'H. G. Wells', genre: 'Science Fiction', read: false},
// );

// entry.save();
