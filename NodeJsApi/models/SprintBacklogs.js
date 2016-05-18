var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SprintBacklogSchema = Schema({
    Title:String,
    Point:Number,
    ProductBacklogId:String,
    SprintNumber:Number,
    Details:String,
    UserId:String,
    UserName:String,
    Completed:Boolean

}, {collection:"SprintBacklogs"});
mongoose.model("SprintBacklogs", SprintBacklogSchema);
console.log("SprintBacklog Schema loaded");
module.exports = mongoose.model("SprintBacklogs");