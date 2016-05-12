/**
 * Created by RaynorChan on 3/27/16.
 */
loginApp.controller("RegisterCtrl", function ($scope, $location, $mdToast, $http) {

    var toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    function backToLoginPage(){
        $location.path("/Login");
    }

    $scope.user = {
        UserName:"raynorchan",
        Email:"1@q.com",
        Name:"raynorchan",
        Phone:1283736274,
        Role:"1",
        Password:"1",
    };

    function submitRegisterRequest(){

        //提交用户信息
        $http.put(BaseApiServer+"Users/"+$scope.user.UserName, $scope.user).then(function (receivedContent) {


            var content = receivedContent.data;

            //自动登录,记录Token并保存登录信息
            var token = content.Token;
            var loginUser = content.User;

            LoginControl.SetLoginInfo(token, loginUser);


            $mdToast.show($mdToast.simple().textContent('注册成功!').position("top right")).then(function () {

                //注册完成后自动跳转到主页.
                window.location = "/";
            });
        }, function (recivedContent) {

            //出错处理:当请求不是2XX的时候将会进入该方法.
            $mdToast.show($mdToast.simple().textContent(recivedContent.data.message).position("top right"));
        });

    }

    $scope.ScrumRoles = ClientConst.ScrumRoles;

    $scope.submitRegisterRequest = submitRegisterRequest;


    $scope.backToLoginPage = backToLoginPage;
});