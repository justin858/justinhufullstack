var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var EmailSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  comments: String,
  purpose: String
});
// define model
var Email = mongoose.model('Email', EmailSchema );

module.exports = Email;
