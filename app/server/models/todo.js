var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var TodoSchema = new Schema({
  text: String
});

// define model
var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
