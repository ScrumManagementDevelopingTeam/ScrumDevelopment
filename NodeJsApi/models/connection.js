/**
 * Created by RaynorChan on 5/2/16.
 */

var mongoose = require("mongoose");
var connectionString = require("../config").DbConnectionString;

mongoose.connect(connectionString);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "mongoose: connection error:"));
db.on("open", function () {
    console.log("mongoose: mongo db connection established.");
});

module.exports = db;