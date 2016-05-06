var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = require("./Users.js");

var TeamSchema = Schema({
    TeamName:String,
    TeamDescription:String,
    Users:[userSchema]
}, {collection:"Teams"});

mongoose.model("Teams", TeamSchema);
console.log("Team Schema Loaded");


module.exports = TeamSchema;