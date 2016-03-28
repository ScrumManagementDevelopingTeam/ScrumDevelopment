/**
 * Created by RaynorChan on 3/27/16.
 */
loginApp.controller('LoginCtrl', function($scope, $location) {
    function onLoginButtonClicked(){
        //perform login things here
    }

    function onRegisterButtonClicked(){
        //perform register things here
        jumpToRegisterPage();
    }

    function performLogin(userName, passwd, callback){

    }

    function jumpToRegisterPage(){
        $location.path("/Register");
    }

    $scope.onRegisterButtonClicked = onRegisterButtonClicked;
});