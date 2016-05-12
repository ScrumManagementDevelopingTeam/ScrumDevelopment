/**
 * Created by RaynorChan on 5/2/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    Name:String,
    Description:String,
    CreateTime:Date,
    ExpiredDeliverTime:Date,

}, {collection:"Projects"});
mongoose.model("Projects", ProjectSchema)
console.log("Project Schema loaded")
module.exports = mongoose.model("Projects")