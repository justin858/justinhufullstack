
// set up
var express = require('express');
var app     = express();
var mongoose = require('mongoose');
// log requests to the console
var morgan = require('morgan');
// pull information from HTML POST
var bodyParser = require('body-parser');
// for Authentication
var jwt        = require("jsonwebtoken");
var config     = require('./config');
// simulate DELETE and PUT
var methodOverride = require('method-override');

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

var Todo = require('./app/server/models/todo.js');
var Email = require('./app/server/models/email.js');
var Project = require('./app/server/models/project.js');
var Skill = require('./app/server/models/skill.js');
var User = require('./app/server/models/user.js');
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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    next();
};
// mongoose.connect('mongodb://localhost:27017/todoapp');
mongoose.connect('mongodb://justin858:1q2w3e4r@ds011775.mlab.com:11775/justinhufullstack');
app.set('superSecret', config.secret);

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(allowCrossDomain);
app.use(methodOverride());

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

  // get all projects
  app.get('/api/projects', function(req, res) {
    // use mongoose to get all todos in the database
    Project.find(function(err, projects) {
      // if there is an error retrieving, send the
      if (err)
        res.send(err)

      res.json(projects); // return all todos in JSON format
    });
  });

  // get one project
  app.get('/api/projects/:projectId', function(req, res) {
    // use mongoose to get all todos in the database
    Project.findOne({'slug': req.params.projectId }, function(err, project) {
      // if there is an error retrieving, send the
      if (err)
        res.send(err)

      res.json(project); // return all todos in JSON format
    });
  });

  // create todo and send back all todos after creation
  app.post('/api/projects', function(req, res) {
    Project.create({
      Pid: req.body.Pid,
      slug: req.body.slug,
      title: req.body.title,
      description: req.body.description,
      skills: req.body.skills,
      client: req.body.client,
      agency: req.body.agency,
      image: req.body.image,
      Exlink: req.body.Exlink
    }, function(err, project) {
      if (err)
        res.send(err);

      Project.find(function(err, projects) {
        if (err)
          res.send(err)
        res.json(projects);
      });
    });
  });


  // delete a project
  app.delete('/api/projects/:project_id', function(req, res) {
    Project.remove({
      _id : req.params.project_id
    }, function(err, project) {
      if (err)
        res.send(err);

      Project.find(function(err, projects) {
        if (err)
          res.send(err)
        res.json(projects);
      });
    });
  });

  // get all skills
  app.get('/api/skills', function(req, res) {
    // use mongoose to get all todos in the database
    Skill.find(function(err, skills) {
      // if there is an error retrieving, send the
      if (err)
        res.send(err)

      res.json(skills); // return all todos in JSON format
    });
  });

  // create todo and send back all todos after creation
  app.post('/api/skills', function(req, res) {
    Skill.create({
      skill: req.body.skill,
      level: req.body.level
    }, function(err, skill) {
      if (err)
        res.send(err);

      Skill.find(function(err, skills) {
        if (err)
          res.send(err)
        res.json(skills);
      });
    });
  });


  // delete a project
  app.delete('/api/skills/:skill_id', function(req, res) {
    Skill.remove({
      _id : req.params.skill_id
    }, function(err, skill) {
      if (err)
        res.send(err);

      Skill.find(function(err, skills) {
        if (err)
          res.send(err)
        res.json(skills);
      });
    });
  });

  // get all email
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

// Authentication
app.post('/authenticate', function(req, res) {
  User.findOne({username: req.body.username, password: req.body.password}, function(err, user) {
    if (err) {
      res.json({
        type: false,
        data: "Error occured: " + err
      });
    } else {
      if (user) {
        res.json({
          type: true,
          data: user,
          token: user.token
        })
      } else {
        res.json({
          type: false,
          data: "Incorrect username/password"
        });
      }
    }
  });
});

app.post('/signin', function(req, res) {
  User.findOne({username: req.body.username, password: req.body.password}, function(err, user) {
    if (err) {
      res.json({
        type: false,
        data: "Error occured" + err
      });
    } else {
      var userModel = new User();
      userModel.username = req.body.username;
      userModel.password = req.body.password;
      userModel.save(function(err, user) {
        user.token = jwt.sign(user, app.get('superSecret'));
        user.save(function(err, user1) {
          res.json({
            type: true,
            data: user1,
            token: user1.token
          });
        });
      })
    }
  });
});

// manage access to endpoint
app.get('/me', ensureAuthorized, function(req, res) {
    User.findOne({token: req.token}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            res.json({
                type: true,
                data: user
            });
        }
    });
});

// listen (start app with node server.js )
app.listen(8090);
console.log("App listening on port 8090");



function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}
