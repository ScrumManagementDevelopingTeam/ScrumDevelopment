/**
 * Created by RaynorChan on 3/27/16.
 */
loginApp.controller('LoginCtrl', function($scope, $location, $http, $mdToast) {
    function onLoginButtonClicked(){
        //perform login things here
        performLogin();
    }

    function onRegisterButtonClicked(){
        //perform register things here
        jumpToRegisterPage();
    }

    function performLogin(userName, passwd, callback){
        console.log($scope.user);
        //提交用户信息
        $http.post(BaseApiServer+"Login", $scope.user).then(function (receivedContent) {



            var content = receivedContent.data;

            //自动登录,记录Token并保存登录信息
            var token = content.Token;
            var loginUser = content.User;

            LoginControl.SetLoginInfo(token, loginUser);


            //登录完成后自动跳转到主页.
            window.location = "/";

        }, function (recivedContent) {

            //出错处理:当请求不是2XX的时候将会进入该方法.
            $mdToast.show($mdToast.simple().textContent(recivedContent.data.message).position("top right"));
        });
    }

    function jumpToRegisterPage(){
        $location.path("/Register");
    }

    $scope.onRegisterButtonClicked = onRegisterButtonClicked;
    $scope.onLoginButtonClicked = onLoginButtonClicked;
});