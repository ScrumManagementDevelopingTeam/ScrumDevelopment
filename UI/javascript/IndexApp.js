var app = angular.module('ScrumManagement', ['ngMaterial', 'ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {templateUrl: "./views/index.html"})
        .when("/SprintBacklog", {templateUrl: "./views/SprintBacklog.html"})
        .when("/Admin", {templateUrl:"./views/Admin.html"})
});