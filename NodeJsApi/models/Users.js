var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
    UserName:String,
    Password:String,
    Name:String,
    TeamId:String
}, {collection:"Users"});


mongoose.model("Users", UserSchema);
console.log("User Schema Loaded");

module.exports = mongoose.model("Users");