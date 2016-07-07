
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

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
// var auth = {
//   auth: {
//     api_key: 'key-eef70829d405b9114174ef2011651b73',
//     domain: 'sandboxa089534adae143e4b78f3267f9f69ca9.mailgun.org'
//   }
// }
//
// var nodemailerMailgun = nodemailer.createTransport(mg(auth));
//
// nodemailerMailgun.sendMail({
//   from: 'postmaster@sandboxa089534adae143e4b78f3267f9f69ca9.mailgun.org',
//   to: 'justin858@hotmail.com', // An array if you have multiple recipients.
//   subject: 'Hey you, awesome!',
//   text: 'Mailgun rocks, pow pow!',
// }, function (err, info) {
//   if (err) {
//     console.log('Error: ' + err);
//   }
//   else {
//     console.log('Response: ' + info);
//   }
// });

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
app.use('/bower_components', express.static(__dirname + '/bower_components'));
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


  // define model
  var Email = mongoose.model('Email', {
    name: String,
    email: String,
    phone: String,
    comments: String,
    purpose: String
  });

  // get all todos
  app.get('/api/email', function(req, res) {
    // use mongoose to get all todos in the database
    Email.find(function(err, email) {
      // if there is an error retrieving, send the
      if (err)
        res.send(err)

      res.json(email); // return all todos in JSON format
    });
  });
  // create todo and send back all todos after creation
  app.post('/api/email', function(req, res) {
    Email.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      comments: req.body.comments,
      purpose: req.body.purpose
    }, function(err, email) {
      if (err)
        res.send(err);

      Email.find(function(err, email) {
        if (err)
          res.send(err)
        res.json(email);
      });
    });
  });
// listen (start app with node server.js )
app.listen(8090);
console.log("App listening on port 8090");

// RESTful API
