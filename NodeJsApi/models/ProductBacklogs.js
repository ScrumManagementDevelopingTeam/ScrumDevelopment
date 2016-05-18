var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductBacklogSchema = Schema({
    UserStoryTitle:String,
    Rank:Number,
    Deadline:Date,
    UserStory:String,
    ProjectId:String

}, {collection:"ProductBacklogs"});
mongoose.model("ProductBacklogs", ProductBacklogSchema);
console.log("Product Backlog Schema loaded");
module.exports = mongoose.model("ProductBacklogs");