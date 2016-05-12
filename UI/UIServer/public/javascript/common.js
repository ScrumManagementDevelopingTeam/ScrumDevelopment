//登录控制等方法

var BaseApiServer = "http://localhost:3001/";

var LocalStorage = {

    GetObject: function getObject (key) {
        return JSON.parse(localStorage.getItem(key));
    },

    SetObject: function setObject (key, object) {

        console.log(object);

        var value = JSON.stringify(object);
        localStorage.setItem(key, value);
    },

    RemoveObject : function removeProject (key) {
        localStorage.removeItem(key);
    }
};

var LoginControl = {
    SetLoginInfo: function setLoginInfo (token, userInfo) {

        console.log(userInfo);
        LocalStorage.SetObject("token", {value:token});

        return LocalStorage.SetObject("loginUser", userInfo);
    },

    GetToken : function getToken () {
        return LocalStorage.GetObject("token").value;
    },

    GetUserInfo : function getUserInfo () {
        return LocalStorage.GetObject("loginUser");
    },
    ClearLoginInfo: function clearLoginInfo () {
        return LocalStorage
    }
};