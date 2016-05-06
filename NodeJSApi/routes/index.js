var express = require('express');
var router = express.Router();
var UserEntity = require("../models/Users");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scrum Management API 正在运行' });
});

router.put('/Users/:UserName', function (req, res, next) {
  var user = new UserEntity({
    UserName:req.params.UserName,
    Password:req.body.Password,
    Name:req.body.Name
  });

  user.save(function (err, user) {
    if (err){
      return res.json("fail");
    }

    res.json(user);
  })
});

module.exports = router;
