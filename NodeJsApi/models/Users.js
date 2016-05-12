var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
    UserName:String,
    Password:String,
    Name:String,
    TeamId:String,
    Role:Number,
    TeamName:String //所在团队队名
}, {collection:"Users"});


mongoose.model("Users", UserSchema);
console.log("User Schema Loaded");

module.exports = mongoose.model("Users");