var loginApp = angular
    .module('MyApp',['ngMaterial','ngRoute', 'ngMessages', 'material.svgAssetsCache'])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/Login", {templateUrl:"views/Login.html"})
            .when("/Register", {templateUrl: "views/Register.html"})
            .when("/", {redirectTo:"/Login"})
    });