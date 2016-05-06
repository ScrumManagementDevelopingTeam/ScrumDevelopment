/**
 * Created by RaynorChan on 5/2/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var teamSchema = require("./Teams.js");

var ProjectSchema = Schema({
    Name:String,
    Description:String,
    Teams:[teamSchema],
});