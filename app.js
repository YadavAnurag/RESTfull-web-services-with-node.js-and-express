var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Database connection
var db = mongoose.connect('mongodb://localhost:27017/bookAPI', {useNewUrlParser: true}, function(err){
  if(err){
    return console.log('Failed to Connect to database server');
  }else{
    console.log('database connected');
  }
});

bookRouter = require('./routes/bookRoutes')();
authorRouter = require('./routes/authorRoutes')();
app.use('/api/books', bookRouter);
app.use('/api/authors', authorRouter);

app.get('/', function (req, res) {
  res.send('Welcome to my API');
});


PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`App is running on port: ${PORT}`);
});
