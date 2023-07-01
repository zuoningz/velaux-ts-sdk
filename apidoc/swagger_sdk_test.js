"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("./out/typescript/runtime");
var ApplicationApi_1 = require("./out/typescript/apis/ApplicationApi");
var AuthenticationApi_1 = require("./out/typescript/apis/AuthenticationApi");
var configuration = new runtime_1.Configuration({
    basePath: 'http://127.0.0.1:8000'
});
var applicationAPI = new ApplicationApi_1.ApplicationApi(configuration);
var authAPI = new AuthenticationApi_1.AuthenticationApi(configuration);
var createComponentRequest = {
    name: 'componentABCD',
    componentType: 'webservice'
};
var createApplicationRequest = {
    body: {
        name: 'My Applicationaaaa',
        project: 'default',
        component: createComponentRequest,
        icon: 'https://i.pinimg.com/474x/85/01/4c/85014c80957aa532de726519abeb3e76.jpg'
    }
};
// applicationAPI.createApplication(createApplicationRequest).then(res => {
//     console.log(res)
// })
// authAPI.getLoginUserInfo().then(res => {
//     console.log(res)
// })
// login and get access token
var accessToken = '';
var loginRequestParam = {
    body: {
        "username": "admin",
        "password": "VelaUX12345"
    }
};
authAPI.login(loginRequestParam).then(function (res) {
    console.log(res);
    accessToken = res.accessToken;
});
applicationAPI.createApplication({
    body: {
        name: 'My Applicationaaaa',
        project: 'default',
        component: {
            name: 'componentABCD',
            componentType: 'webservice'
        },
        icon: 'https://i.pinimg.com/474x/85/01/4c/85014c80957aa532de726519abeb3e76.jpg'
    }
}).then(function (res) {
    console.log(res);
});
applicationAPI.listApplications().then(function (res) {
    console.log(res);
});
