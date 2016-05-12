/**
 * Created by RaynorChan on 3/19/16.
 */
app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log, $location) {

    $scope.LoginUserInfo = LoginControl.GetUserInfo();
    $scope.LoginUserInfo.ScrumRoleName = ClientConst.GetScrumRolesById($scope.LoginUserInfo.Role);

    $scope.menuItems = [
        {
            text:"项目管理",
            url:"/Project"
        },
        {
            text:"团队管理",
            url:"/Teams"
        },
        {
            text:"用户管理",
            url:"/Users"
        },
        {
            text:"Sprint Backlog管理",
            url:"/SprintBacklog"
        },
        {
            text:"Product Backlog管理",
            url:"/ProductBacklog"
        },
        {
            text:"查看燃尽图",
            url:"/BurningDownChart"
        },
        {
            text:"Bug管理",
            url:"/Bugs"
        },
        {
            text:"迭代会议情况",
            url:"/Project"
        },
        {
            text:"回顾会议情况",
            url:"/Project"
        },
        {
            text:"评审会议情况",
            url:"/Project"
        },
        {
            text:"管理员",
            url:"/Project"
        }

    ];
        $scope.title = "模块标题";
        $scope.$on("toolbarTitleChanged", function(event, data){
            $scope.title=data;
        });
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function () {
            return $mdSidenav('right').isOpen();
        };

        $scope.go = function ( path ) {
            $location.path( path );
        };
        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 1);
        }

        function buildToggler(navID) {
            return function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    })
    .controller("MyHomeCtrl", function ($scope) {
        changeToolbarTitle($scope, "我的首页");

        var imagePath = 'img/list/60.jpeg';
        $scope.todos = [
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            }
        ];
    })
    .controller("ToolbarCtrl", function ($scope) {

    })
    //项目管理部分
    .controller("ProjectCtrl", function ($scope, $mdDialog, $mdMedia, $http) {
        changeToolbarTitle($scope, "项目管理");

        //弹出添加项目对话框
        $scope.showAddProjectDialog = function (ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                    controller: "AddProjectCtrl",
                    bindToController: true,
                    templateUrl: '/views/DialogTemplates/AddProject.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function (answer) {
                    console.log(answer);
                    $http.put(BaseApiServer + "Projects", answer).then(function (receivedContent) {
                        getProjects();
                    })
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };

        getProjects();

        function getProjects(){
            $http.get(BaseApiServer + "Projects").then(function (receivedContent) {
                $scope.Projects = receivedContent.data;
            });
        }

        $scope.onProjectItemClicked = function (project) {
            $scope.currentSelectedProject = project;
        }

    })
    .controller("IndexCtrl", function($scope){

    })
    .controller("SprintBacklogCtrl", function($scope, $mdMedia, $mdDialog){
        changeToolbarTitle($scope, "Sprint Backlog 管理");
        $scope.currentProject = {};
        $scope.currentProject.name = "项目1";

        //弹出添加项目对话框
        $scope.showAddSprintBacklogDialog = function (ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                    controller: "AddSprintBacklogCtrl",
                    bindToController: true,
                    templateUrl: '/views/DialogTemplates/AddSprintBacklog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };

        $scope.projects = [


        ];
        for (var j = 1; j<=10; j++){
            $scope.projects.push({
                Id: guid(),
                Name:"项目"+j,
                CreateTime:Date.now(),
                ExpiredDeliverTime:Date.now(),
                Description:"项目"+j+"描述"
            });
        }

        $scope.ProductBacklogs = [

        ];

        for (var i=1; i<=10; i++){
            $scope.ProductBacklogs.push({
                Id: guid(),
                UserStory:"用户故事"+i,
                Order:i,
                CreateTime:Date.now(),
            })
        }

        $scope.SprintBacklogs = [];

        for (var i = 1; i<=10; i++){
            $scope.SprintBacklogs.push({
                id:guid(),
                MissionTitle:"任务标题" +i,
                Mission:"任务详细描述"+i,
                CreateTime:Date.now()
            });
        };




        var imagePath = 'img/list/60.jpeg';
        $scope.todos = [
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            }
        ];
    })
    .controller("ProductBacklogCtrl", function($scope, $mdMedia, $mdDialog){
        changeToolbarTitle($scope, "Product Backlog 管理");
        $scope.currentProject = {};
        $scope.currentProject.name = "项目1";

        //弹出添加项目对话框
        $scope.showAddProductBacklogDialog = function (ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                    controller: "AddProductBacklogCtrl",
                    bindToController: true,
                    templateUrl: '/views/DialogTemplates/AddProductBacklog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };


        $scope.projects = [


        ];
        for (var j = 1; j<=10; j++){
            $scope.projects.push({
                Id: guid(),
                Name:"项目"+j,
                CreateTime:Date.now(),
                ExpiredDeliverTime:Date.now(),
                Description:"项目"+j+"描述"
            });
        }

        $scope.ProductBacklog = [

        ];

        for (var i=1; i<=10; i++){
            $scope.ProductBacklog.push({
                Id: guid(),
                UserStory:"用户故事"+i,
                Order:i,
                CreateTime:Date.now()
            })
        }

    })
    .controller("UsersCtrl", function($scope, $http, $mdToast, $mdDialog, $mdMedia){
        changeToolbarTitle($scope, "用户管理");


        $scope.showSelectTeamDialog = function (ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                    controller: "SelectTeamCtrl",
                    bindToController: true,
                    templateUrl: '/views/DialogTemplates/SelectTeam.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function (Team) {

                    $http.post(BaseApiServer+"Users/"+$scope.CurrentUser._id+"/Team/"+Team.id, {}).then(function (receivedContent) {
                        $scope.CurrentUser = receivedContent.data;
                        getAllUsers();
                    })

                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };

        function getAllUsers(){

            $http.get(BaseApiServer+"Users").then(function (receivedContent) {
                $scope.Users = receivedContent.data;

            }, function (receivedContent) {
                showToast("拉取用户信息失败", $mdToast)
            })
        }

        getAllUsers();


        $scope.onUserItemClicked = function (user) {
            $scope.CurrentUser = user;
            $http.get(BaseApiServer+"Teams/"+user.TeamId).then(function (receivedContent) {
                console.log(user.TeamId);
                $scope.CurrentSelectedUserTeam = receivedContent.data;
            })
        };

        $scope.onChangeUserTeamClicked = function () {
            if ($scope.CurrentUser){

            }
        }
    })
    .controller("BugCtrl", function($scope, $mdMedia, $mdDialog){
        $scope.showAddBugDialog = function (ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                    controller: "AddBugCtrl",
                    bindToController: true,
                    templateUrl: '/views/DialogTemplates/AddBug.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };

        changeToolbarTitle($scope, "Bug 管理");
        $scope.currentProject = {};
        $scope.currentProject.name = "2016天职国际工作平台V4.0";
        $scope.Sprints = [{Number:1, Title:"当用户点击\"登录\"按钮的时候,界面没有反应"}];
        for (var i = 1; i <= 10; i ++){
            $scope.Sprints.push({
                Number : i,
                Title:"Bug"+i,
                Comment:"这是第"+i+"次迭代 "
            });
        }

    })
    .controller("PlanningMeetingCtrl", function($scope){

    })
    .controller("RetrospectiveMeetingCtrl", function($scope){

    })
    .controller("TeamCtrl", function($scope, $mdMedia, $mdDialog, $mdToast, $http){
        changeToolbarTitle($scope, "团队管理");


        $scope.showAddTeamBacklog = function (ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                    controller: "AddTeamCtrl",
                    bindToController: true,
                    templateUrl: '/views/DialogTemplates/AddTeam.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function (Team) {

                    $http.put(BaseApiServer+"Teams", Team).then(function (recivedContent) {


                        showToast("添加成功", $mdToast);

                        getTeamList();
                    }, function (recivedContent) {
                        showToast("添加失败", $mdToast);
                    })

                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };


        $scope.showSelectProjectDialog = function (ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                    controller: "SelectProjectCtrl",
                    bindToController: true,
                    templateUrl: '/views/DialogTemplates/SelectProject.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function (Project) {

                    $http.post(BaseApiServer+"Teams/"+$scope.CurrentSelectedTeam._id+"/Project/"+Project.id, {}).then(function (receivedContent) {
                        $scope.CurrentSelectedTeam = receivedContent.data;
                        getTeamList();
                    })

                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };


        $scope.onTeamItemClicked = function (item) {

            $scope.CurrentSelectedTeam = item;

            $http.get(BaseApiServer+"Teams/"+item._id+"/Users").then(function (recivedContent) {
                $scope.CurrentTeamUsers = recivedContent.data;
                console.log($scope.CurrentTeamUsers);
            }, function (recivedContent) {
                showToast("获取用户列表失败", $mdToast);
            });
        };

        $scope.onSelectProjectClicked = function () {

        }

        function getTeamList(){
            $http.get(BaseApiServer+"Teams").then(function (recivedContent) {
                $scope.Teams = recivedContent.data;
            }, function (recivedContent) {
                showToast("获取团队列表失败", $mdToast);
            });
        }

        getTeamList();
    })
    .controller("BurningDownChartCtrl", function ($scope) {
        //the burning down chart container id is BurningDownChartContainer

        changeToolbarTitle($scope, "燃尽图");
        $scope.currentProject = {};
        $scope.currentProject.name = "2016天职国际工作平台V4.0";
        $scope.Sprints = [];
        for (var i = 1; i <= 10; i ++){
            $scope.Sprints.push({
                Number : i,
                Title:"迭代"+i,
                Comment:"这是第"+i+"次迭代 "
            });
        }

        var CurrentSprintNumber = 3;
        var CurrentProjectName = "2016天职国际工作平台V4.0";
        $('#BurningDownChartContainer').highcharts({
            title: {
                text: '迭代'+CurrentSprintNumber+"燃尽图",
                x: -20 //center
            },
            subtitle: {
                text: '所属项目: ' + CurrentProjectName,
                x: -20
            },
            xAxis: {
                title: {
                    text: '迭代天数(天)'
                },
                categories: ['0', '1', '2', '3', '4', '5',
                    '6', '7', '8', '9', '10', '11', '12']
            },
            yAxis: {
                title: {
                    text: '工作量(理想人/天)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '个'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: '预期完成数量',
                data: [12, 11, 10, 9, 8,7,6,5,4,3,2,1]
            }, {
                name: '任务完成数量',
                data: [12, 10, 9, 9, 7, 6, 5, 5, 5, 4, 3, 0]
            }]
        });
    })
    .controller("AddProjectCtrl", function ($scope, $mdDialog){
        //Dialog Operations
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    })
    .controller("AddSprintBacklogCtrl", function ($scope, $mdDialog){
        //Dialog Operations
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    })
    .controller("AddTeamCtrl", function ($scope, $mdDialog){
        //Dialog Operationsanswer
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    })
    .controller("AddBugCtrl", function($scope, $mdDialog){

        $scope.SprintBacklogs = [];

        for (var i = 1; i<=10; i++){
            $scope.SprintBacklogs.push({
                id:guid(),
                MissionTitle:"任务标题" +i,
                Mission:"任务详细描述"+i,
                CreateTime:Date.now()
            });
        }


        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    })
    .controller("AddProductBacklogCtrl", function ($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    })
    .controller("SelectTeamCtrl", function ($scope, $mdDialog, $http) {

        function getTeamList(){
            $http.get(BaseApiServer+"Teams").then(function (recivedContent) {
                $scope.Teams = recivedContent.data;
            }, function (recivedContent) {
                showToast("获取团队列表失败", $mdToast);
            });
        }

        getTeamList();


        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    })
    .controller("SelectProjectCtrl", function ($scope, $mdDialog, $http) {

        function getTeamList(){
            $http.get(BaseApiServer+"Projects").then(function (recivedContent) {
                $scope.Projects = recivedContent.data;
            }, function (recivedContent) {
                showToast("获取团队列表失败", $mdToast);
            });
        }

        getTeamList();


        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    })
;


/**
 * Change the title in toolbar
 * @param $scope current scope
 * @param title String  title you want to set
 */
function changeToolbarTitle($scope, title){
    $scope.$emit('toolbarTitleChanged', title);
}

function showToast(message, $mdToast){
    $mdToast.show($mdToast.simple().textContent(message).position("top right")).then(function () {

    });
}

/**
 * generate GUID
 * @returns  {string} Guid
 */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}