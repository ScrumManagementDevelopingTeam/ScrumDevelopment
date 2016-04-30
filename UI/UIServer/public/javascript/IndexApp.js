var app = angular.module('ScrumManagement', ['ngMaterial', 'ngRoute']).config(function ($routeProvider, $locationProvider, $mdIconProvider) {

    $mdIconProvider
        .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
        .defaultIconSet('img/icons/sets/core-icons.svg', 24);

    $locationProvider.html5Mode({
        enabled:true,
        requireBase:true});

    $routeProvider
        .when("/", {templateUrl: "./views/index.html", controller:"MyHomeCtrl"})
        .when("/Project", {templateUrl: "./views/Project.html", controller:"ProjectCtrl"})
        .when("/ProductBacklog", {templateUrl: "./views/ProductBacklog.html", controller:"ProductBacklogCtrl"})
        .when("/SprintBacklog", {templateUrl: "./views/SprintBacklog.html", controller:"SprintBacklogCtrl"})
        .when("/Admin", {templateUrl:"./views/Admin.html"})
        .when("/BurningDownChart", {templateUrl:"./views/BurningDownChart.html", controller:"BurningDownChartCtrl"})
        .when("/Bugs", {templateUrl:"./views/Bugs.html", controller:"BugCtrl"})
});