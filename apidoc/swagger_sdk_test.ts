import { Configuration } from './out/typescript/runtime';
import { ApplicationApi, CreateApplicationRequest } from './out/typescript/apis/ApplicationApi';
import { V1CreateComponentRequest } from './out/typescript/models/V1CreateComponentRequest';
import { AuthenticationApi, LoginRequest } from './out/typescript/apis/AuthenticationApi';

const configuration = new Configuration({
    basePath: 'http://127.0.0.1:8000'
})

const applicationAPI = new ApplicationApi(configuration)
const authAPI = new AuthenticationApi(configuration)

const createComponentRequest : V1CreateComponentRequest = {
    name: 'componentABCD',
    componentType: 'webservice'

}

const createApplicationRequest: CreateApplicationRequest = {
    body: {
        name: 'My Applicationaaaa',
        project: 'default',
        component: createComponentRequest,
        icon: 'https://i.pinimg.com/474x/85/01/4c/85014c80957aa532de726519abeb3e76.jpg'
    }

}

// applicationAPI.createApplication(createApplicationRequest).then(res => {
//     console.log(res)
// })

// authAPI.getLoginUserInfo().then(res => {
//     console.log(res)
// })


// login and get access token
let accessToken = ''
const loginRequestParam: LoginRequest = {
    body: {
        "username": "admin",
        "password": "VelaUX12345"
    }
}
authAPI.login(loginRequestParam).then((res) => {
    console.log(res)
    accessToken = res.accessToken

})

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
}).then(res => {
    console.log(res)
})

applicationAPI.listApplications().then(res => {
    console.log(res)
})