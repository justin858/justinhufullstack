// Initialize the express framework
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
// Initialize the body-parser
// in order to receive the request body
// in POST, PUT and DELETE
var bodyParser = require('body-parser');
var databaseName = 'justinhufullstack';
var databaseUser = 'justin858';
var databasePassword = '1q2w3e4r';

// Express setup
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../')));

// Routes set up
var router = express.Router();
var product = require('./routes/api/product');

// Get all products
router.get('/api/products', product.getAll);

// Create a product
router.post('/api/product', product.create);

// Get one product, update one product, delete one product
router.route('/api/product/:id')
  .get(product.read)
  .put(product.update)
  .delete(product.delete);

// Register the routing
app.use('/', router);

mongoose.connect('mongodb://' + databaseUser + ':' + databasePassword + '@ds011775.mlab.com:11775/' + databaseName);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);

fucntion startServer() {
  // Start up the server
  var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port' + port);
  });
};
