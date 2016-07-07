
// set up
var express = require('express');
var app     = express();
var mongoose = require('mongoose');
// log requests to the console
var morgan = require('morgan');
// pull information from HTML POST
var bodyParser = require('body-parser');
// simulate DELETE and PUT
var methodOverride = require('method-override');

// configuration
//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


// mongoose.connect('mongodb://localhost:27017/todoapp');
mongoose.connect('mongodb://justin858:1q2w3e4r@ds011775.mlab.com:11775/justinhufullstack');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(allowCrossDomain);
app.use(methodOverride());

// define model
var Todo = mongoose.model('Todo', {
  text : String
});

// routes

  // API
  // get all todos
  app.get('/api/todos', function(req, res) {
    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {
      // if there is an error retrieving, send the
      if (err)
        res.send(err)

      res.json(todos); // return all todos in JSON format
    });
  });
  // create todo and send back all todos after creation
  app.post('/api/todos', function(req, res) {
    Todo.create({
      text : req.body.text,
      done : false
    }, function(err, todo) {
      if (err)
        res.send(err);

      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  });
  // delete a todos
  app.delete('/api/todos/:todo_id', function(req, res) {
    Todo.remove({
      _id : req.params.todo_id
    }, function(err, todo) {
      if (err)
        res.send(err);

      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  });

// listen (start app with node server.js )
app.listen(8090);
console.log("App listening on port 8090");

// RESTful API
