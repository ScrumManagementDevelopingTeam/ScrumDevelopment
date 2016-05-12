var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TeamSchema = Schema({
    Name:String,
    Description:String,
    ProjectId:String,
    ProjectName:String,
}, {collection:"Teams"});


mongoose.model("Teams", TeamSchema);
console.log("User Schema Loaded");

module.exports = mongoose.model("Teams");