var express = require('express');
var router = express.Router();
var UserEntity = require("../models/Users");
var TokenEntity = require("../models/Tokens");
var TeamEntity = require("../models/Teams");
var ProjectEntity = require("../models/Projects");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Scrum Management API 正在运行'});
});

//添加用户
router.put('/Users/:UserName', function (req, res, next) {
    var user = new UserEntity({
        UserName: req.params.UserName,
        Password: req.body.Password,
        Name: req.body.Name,
        Role: req.body.Role
    });

    UserEntity.findOne({"UserName": req.params.UserName}).then(
        function (User) {
            if (User) {
                return res.status(409).json({success: false, message: "用户名重复"});
            }

            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "数据库错误"
                    });
                }


                //完成注册,自动登录
                return SaveLoginToken(user, res.status(201));
            })

        }
    );

});
//登录
router.post("/Login",AuthorizeUser);

router.get("/Teams", GetTeams);
router.put("/Teams", AddTeam);
router.get("/Users", GetUsers);
router.get("/Teams/:TeamId", GetTeam);
router.post("/Users/:UserId/Team/:TeamId", ChangeUserTeam);
router.get("/Projects", GetAllProjects);
router.put("/Projects", AddProject);
router.post("/Teams/:TeamId/Project/:ProjectId", ChangeTeamProject);
//获取团队中所有的用户
function GetTeamUsers(req, res, next) {
    var Users = UserEntity.find({TeamId:req.params.Id}).then(function (users) {
        res.json(users);
    })
}
router.get("/Teams/:Id/Users", GetTeamUsers);
function SaveLoginToken(user, res) {
    var token = guid();

    var tokenEntity = new TokenEntity({
        UserId: user._id,
        Token: token
    });

    tokenEntity.save().then(function (Token) {
        user.Token = token;

        //由于不能直接向user中直接插入Token,所以只能分成2个部分.
        var sendContent = {};

        sendContent.User = user;

        sendContent.Token = token;

        res.json(sendContent);
    });
}



function AuthorizeUser(req, res, next){
    UserEntity.findOne({"UserName": req.body.UserName}).then(
        function (User) {
            if (User) {

                if (User.Password == req.body.Password){

                    return SaveLoginToken(User, res);
                }else{
                    return res.status(401).json({success:false, message:"密码错误"});
                }
            }else{
                return res.status(401).json({success:false, message:"不存在此用户"});
            }

        }
    );
}

function AddTeam(req, res, next){


    var team = req.body;
    var teamEntity = new TeamEntity(team);


    teamEntity.save().then(function(Team){
        return res.json(Team);
    })
}

function GetTeam(req, res, next){
    TeamEntity.findOne({_id:req.params.TeamId}).then(
        function(team){
            res.json(team);
        }
    )
}

function GetTeams(req, res, next){
    TeamEntity.find().then(function (teams) {
        res.json(teams);
    })
}

function ChangeUserTeam(req, res, next){
    var userId = req.params.UserId;
    var teamId = req.params.TeamId;

    UserEntity.findOne({_id:userId}).then(function (user) {
        if (user){
            TeamEntity.findOne({_id:teamId}).then(function (team) {
                if (team){
                    user.TeamId = teamId;
                    user.TeamName = team.Name;

                    user.save().then(function (user) {
                        return res.json(user);
                    })
                }
            })
        }
    })
}

function GetUsers(req, res, next){
    UserEntity.find().then(function(Users){

        res.json(Users);
    })
}

function GetAllProjects(req, res, next){
    ProjectEntity.find({}).then(function (allProjects) {
        res.json(allProjects);
    });
}
function ChangeTeamProject(req, res, next){
    TeamEntity.findOne({_id:req.params.TeamId}).then(function (selectedTeam) {
        if (selectedTeam){
            ProjectEntity.findOne({_id:req.params.ProjectId}).then(function (selectedProject) {
                selectedTeam.ProjectId = req.params.ProjectId;
                selectedTeam.ProjectName = selectedProject.Name;
                selectedTeam.save().then(function (savedTeam) {

                    res.json(savedTeam);
                })
            })
        }
    })
}
function AddProject(req, res, next){
    var project = new ProjectEntity(req.body);
    project.save().then(function (savedProject) {
        return res.json(savedProject);
    })
}
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


module.exports = router;
