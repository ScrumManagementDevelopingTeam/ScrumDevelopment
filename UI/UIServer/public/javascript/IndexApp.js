var app = angular.module('ScrumManagement', ['ngMaterial', 'ngRoute']).config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled:true,
        requireBase:true});

    $routeProvider
        .when("/", {templateUrl: "./views/index.html", controller:"MyHomeCtrl", controllerAs:"myHomeCtrl"})
        .when("/SprintBacklog", {templateUrl: "./views/SprintBacklog.html"})
        .when("/Admin", {templateUrl:"./views/Admin.html"})
});