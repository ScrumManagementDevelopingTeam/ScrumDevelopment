/**
 * Created by RaynorChan on 3/27/16.
 */
loginApp.controller("RegisterCtrl", function ($scope, $location, $mdToast) {

    var toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    function backToLoginPage(){
        $location.path("/Login");
    }

    function submitRegisterRequest(){
        $mdToast.show($mdToast.simple().textContent('注册成功!').position("top right")).then(function () {
            $mdToast.show($mdToast.simple().textContent('开始跳转!').position("top right"));
        });
    }

    $scope.ScrumRoles = ClientConst.ScrumRoles;

    $scope.submitRegisterRequest = submitRegisterRequest;

    $scope.backToLoginPage = backToLoginPage;
});