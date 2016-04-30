var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ScrumManagement Node.js API 正在运行' });
});

module.exports = router;
