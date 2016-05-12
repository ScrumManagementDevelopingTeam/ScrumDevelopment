/**
 * Created by RaynorChan on 5/7/16.
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TokenSchema = Schema({
    UserId:String,
    Token:String
}, {collection:"Tokens"});


mongoose.model("Tokens", TokenSchema);
console.log("Token Schema Loaded");

module.exports = mongoose.model("Tokens");