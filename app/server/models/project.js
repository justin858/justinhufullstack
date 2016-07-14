var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var ProjectSchema = new Schema({
    Pid: Number,
    slug: String,
    title: String,
    description: String,
    skills: [String],
    client: String,
    agency: String,
    image: String,
    Exlink: String
});
// define model
var Project = mongoose.model('Project', ProjectSchema );

module.exports = Project;
