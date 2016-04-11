/**
 * Created by RaynorChan on 3/19/16.
 */
app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.title = "模块标题";
        $scope.$on("toolbarTitleChanged", function(event, data){
            $scope.title=data;
        });
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function () {
            return $mdSidenav('right').isOpen();
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
    })
    .controller("ToolbarCtrl", function ($scope) {

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

    })
    .controller("BugCtrl", function($scope){

    })
    .controller("PlanningMeetingCtrl", function($scope){

    })
    .controller("RetrospectiveMeetingCtrl", function($scope){

    })
    .controller("TeamCtrl", function($scope){

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