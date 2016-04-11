var express = require('express');
var router = express.Router();
var path = require("path");
var PUBLICPATH = process.cwd().replace("bin", "public");

/* GET home page. */
router.get("/login", function (req, res, next) {
    console.log(__dirname);

    res.sendFile(path.join(PUBLICPATH, 'Login.html'))
});

router.get('*', function(req, res, next) {
    console.log("aaa");
    res.sendFile(path.join(PUBLICPATH + 'index.html'))
});

module.exports = router;
