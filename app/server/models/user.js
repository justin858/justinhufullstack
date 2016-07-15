var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var UserSchema = new Schema({
    username: String,
    password: String,
    token: String
});
// define model
var User = mongoose.model('User', UserSchema );

module.exports = User;
