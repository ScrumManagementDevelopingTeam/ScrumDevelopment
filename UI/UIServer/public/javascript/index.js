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
            url:"/Project"
        },
        {
            text:"用户管理",
            url:"/Project"
        },
        {
            text:"Sprint Backlog管理",
            url:"/Project"
        },
        {
            text:"Product Backlog管理",
            url:"/Project"
        },
        {
            text:"查看迭代情况",
            url:"/Project"
        },
        {
            text:"Bug管理",
            url:"/Project"
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
        },
        {
            text:"项目管理",
            url:"/Project"
        },

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
    .controller("ProjectCtrl", function ($scope) {
        changeToolbarTitle($scope, "项目管理");
    })
    .controller("IndexCtrl", function($scope){

    })
    .controller("SprintBacklogCtrl", function($scope){

    })
    .controller("ProductBacklogCtrl", function($scope){

    })
    .controller("ProductBacklogCtrl", function($scope){

    })
    .controller("UsersCtrl", function($scope){
        changeToolbarTitle($scope, "用户管理");
    })
    .controller("BugCtrl", function($scope){

    })
    .controller("PlanningMeetingCtrl", function($scope){

    })
    .controller("RetrospectiveMeetingCtrl", function($scope){

    })
    .controller("TeamCtrl", function($scope){
        changeToolbarTitle($scope, "团队管理");
    })
    .controller("ProjectCtrl", function($scope){

    });


/**
 * Change the title in toolbar
 * @param $scope current scope
 * @param title String  title you want to set
 */
function changeToolbarTitle($scope, title){
    $scope.$emit('toolbarTitleChanged', title);
}