var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BugsSchema = Schema({
    Title:String,
    ProjectId:String,
    ProjectName:String,
    Details:String,
    UserId:String, //分配人ID
    UserName:String, //分配人Name
    Completed:Boolean

}, {collection:"Bugs"});
mongoose.model("Bugs", BugsSchema);
console.log("Bugs Schema loaded");
module.exports = mongoose.model("Bugs");