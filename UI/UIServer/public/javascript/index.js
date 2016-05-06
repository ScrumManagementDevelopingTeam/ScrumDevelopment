/**
 * Created by RaynorChan on 3/19/16.
 */
app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log, $location) {
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
    .controller("ProjectCtrl", function ($scope, $mdDialog, $mdMedia) {
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

        var imagePath = 'img/list/60.jpeg';
        $scope.todos = [
            {
                face : imagePath,
                what: '2016大唐审计管理系统',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: '2016天职工程工作平台',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: '项目3',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: '项目4',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: '项目5',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: '项目6',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: '项目7',
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
    .controller("UsersCtrl", function($scope){
        changeToolbarTitle($scope, "用户管理");

        $scope.Users = [{Name:"陈天运", Id:guid()}];
        for (var i = 1; i<=10; i++){
            $scope.Users.push({
                Name:"用户"+i,
                Id:guid()
            })
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
    .controller("TeamCtrl", function($scope){
        changeToolbarTitle($scope, "团队管理");
        $scope.Teams = [{TeamId:guid(), TeamName:"天职国际工作平台V4.0开发团队", TeamDescription:"天职国际"}];
        for(var i = 1; i<=10; i++){
            $scope.Teams.push({
                TeamId : guid(),
                TeamName: "测试团队"+i,
                TeamDescription: "测试团队"+i
            })
        }
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
    });


/**
 * Change the title in toolbar
 * @param $scope current scope
 * @param title String  title you want to set
 */
function changeToolbarTitle($scope, title){
    $scope.$emit('toolbarTitleChanged', title);
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