var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var SkillSchema = new Schema({
    skill: String,
    level: Number
});
// define model
var Skill = mongoose.model('Skill', SkillSchema );

module.exports = Skill;
