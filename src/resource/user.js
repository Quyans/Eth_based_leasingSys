import {handleResponse, server,testtanchuang} from "../utils/http";
import qs from "qs";

export function getUserInfo(id) {
    return  Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            "userType":0,
            "username":"liupenghao",//用户名
            "name":"刘鹏昊",//姓名
            "gender":0, //0女 1男
            "phone":18560125097,  //电话号码
            "id":370102199711111111,  //身份证号
            "credit":15,   //信誉值
            "password":123456,
            "myhouse":[
                {
                    "commu_name":"奥龙官邸",
                    "house_id_hash":"sdfaafadsfasd"
                },

                {
                    "commu_name":"茗筑美嘉",
                    "house_id_hash":"sdfsdafsdfadf"
                },
            ]
        }
    })
    // return server.get('user/user', {
    //     params: {
    //         username
    //     }
    // }).then(handleResponse)
}

export function updateUserInfo(password,phone) {
    // console.log(form.get('profile'))
    return server.post('user/info',  qs.stringify({password, phone})).then(handleResponse)
}

//充值
export function invest(money) {
    // console.log(form.get('profile'))
    return Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            "username":"liupenghao",//用户名
            "name":"刘鹏昊",//姓名
            "balance":86500  // 充值后余额
        }
    })
    return server.post('user/account',  qs.stringify({money})).then(handleResponse)
}


export function getUserBalance(username) {
    return  Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            "username":"liupenghao",//用户名
            "name":"刘鹏昊",//姓名
            "balance":85500  // 余额
        }
    })
    // return server.get('user/balance', {
    //     params: {
    //         username
    //     }
    // }).then(handleResponse)
}

//获取我的足迹
export function getmystep() {

    return server.get('user/history').then(handleResponse)
    
}

//获取交易记录
export function getTransRecord(username) {
    return  Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            "username":"liupenghao",//用户名
            "name":"刘鹏昊",//姓名
            "record":[
                {
                    "time": "2019-1-13",    //交易时间
                    "gas": 500,  //花费的手续费
                    "low_location":{
                        "provi":"山东省",
                        "city":"济南市",
                        "sector":"历下区",
                        "commu_name":"奥龙官邸"
                        },
                    "specific_location":"2号楼3单元1801"
                },

                {
                    "time": "2019-1-13 ",   //交易时间
                    "gas": 500 , //花费的手续费
                    "low_location":{
                        "provi":"山东省",
                        "city":"济南市",
                        "sector":"历下区",
                        "commu_name":"奥龙官邸"
                    },
                    "specific_location":"2号楼3单元1801",
                },
            ],
        }
    })
    // return server.get('user/trans_record', {
    //     params: {
    //         username
    //     }
    // }).then(handleResponse)
}

//联系房主
export function contactOwner(house_hash) {
    // console.log(form.get('profile'))
    return Promise.resolve({
        "status":200,
        "message":"success",
        "data": {
            "phone":"18560125097"
        }
    })
    return server.post('/user/contact_owner',  qs.stringify({house_hash})).then(handleResponse)
}
//房主获取与他相关的请求

export function ownerGet(){
    return Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            tract:[
                {
                     "requestID":"xxoo",
                     "username":"xxdd",   //请求的人的用户名
                     "name":"曲延松",       //请求的人的姓名
                     "house_hash":"adfafd",    //请求的房子hash
                     "commu_name":"茗筑美嘉",  //房子小区名
                     "state":0    //  0未回复  1 卖家同意买家未确认  2 买家确认卖家未确认 3、 卖家确认
                },
                {
                    "requestID":"xsxoo",
                    "username":"xxdd",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "state":0    //  0未回复  1 卖家同意买家未确认  2 买家确认卖家未确认 3、 卖家确认
                 },
]
}

    })
}

//房主获取用户反馈请求
export function userGet(){
    return Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            tract:[
                {
                    "requestID":"xxoo",
                    "username":"xxdd",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_hash":"adfafd",    //请求的房子hash
                    "commu_name":"茗筑美嘉",  //房子小区名
                    "state":2    //  0未回复  1 卖家同意买家未确认  2 买家确认卖家未确认 3、 卖家确认
                },
                {
                    "requestID":"xsxoo",
                    "username":"xxdd",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "state":2    //  0未回复  1 卖家同意买家未确认  2 买家确认卖家未确认 3、 卖家确认
                },
            ]
        }

    })
}

//房客请求入住
export function userSet(house_id_hash,owner) {
    // console.log(form.get('profile'))
    // return testtanchuang()
    // return Promise.resolve({
    //     "status":200,
    //     "message":"success",
    //     "data": {
    //
    //     }
    // })
    // var house_id_hash="eHg6zhM8qYhIK/TzrDDYzg=="
    // var owner = 'qys'
    return server.post('/tract/userSet',  qs.stringify({house_id_hash,owner})).then(handleResponse)
}

//评价房子
export function evaluateHouse(form) {
    return Promise.resolve({
        "status":200,
        "message":"success",
    })
    return server.post('/house/valuation', form).then(handleResponse)
}


//获取所有用户信息
export function getAllUser() {
    return  Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            "users":[
                {
                    "username":"liupenghao",//用户名
                    "name":"曲延松",         //姓名
                    "gender":0 ,           //0女 1男
                    "phone":18560125097,  //电话号码
                    "id":370102199711111111 , //身份证号
                    "credit":15         //信誉值
                },
                {
                    "username":"jack",//用户名
                    "name":"JackSmith",         //姓名
                    "gender":0 ,           //0女 1男
                    "phone":13246456789,  //电话号码
                    "id":37010219975641 , //身份证号
                    "credit":18         //信誉值
                },
                {
                    "username":"liupenghao",//用户名
                    "name":"曲延松",         //姓名
                    "gender":0 ,           //0女 1男
                    "phone":18560125097,  //电话号码
                    "id":370102199711111111 , //身份证号
                    "credit":15         //信誉值
                }
            ]
        }
    })
    // return server.get('/user/changeinfo', {
    // }).then(handleResponse)
}

//管理员修改用户信息
export function changeUserInfo(username,credit) {
    // console.log(form.get('profile'))
    // return Promise.resolve({
    //     "status":200,
    //     "message":"success",
    //     "data":{
    //         "username":"qys",
    //         "credit":30
    //     }
    // })
    return server.post('/user/contact_owner',  qs.stringify({house_hash})).then(handleResponse)
}



//获取房屋列表
export function getHouseList() {
    return  Promise.resolve({

        "data":{
            "verified":[            //通过验证的房子
                {
                    "photo":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg",   //一张图片的hash
                    "low_str_location":"山东省济南市历下区**小区",
                    "lease":"5000",
                    "house_type":"2",
                    "lease_type":"1",
                },

               {
                   "photo":"sadfadsfadf" ,  //一张图片的hash
                   "low_str_location":"山东省济南市历下区**小区",
                   "lease":"5000",
                   "house_type":"2",
                   "lease_type":"1",
               },

               {
                   "photo":"sadfadsfadf" ,  //一张图片的hash
                   "low_str_location":"山东省济南市历下区**小区",
                   "lease":"5000",
                   "house_type":"2",
                   "lease_type":"1",
               },
            ],


            "non_verified":[            //通过验证的房子
                {
                    "photo":"sadfadsfadf",   //一张图片的hash
                    "low_location":"山东省济南市历下区**小区",
                    "lease":"5000",
                    "house_type":"2",
                    "lease_type":"1",
                },

               {
                   "photo":"sadfadsfadf",   //一张图片的hash
                   "low_location":"山东省济南市历下区**小区",
                   "lease":"5000",
                   "house_type":"2",
                   "lease_type":"1",
               },

               {
                   "photo":"sadfadsfadf" ,  //一张图片的hash
                   "low_location":"山东省济南市历下区**小区",
                   "lease":"5000",
                   "house_type":"2",
                   "lease_type":"1",
               },
            ],
        }
    })
//     return server.get('house/allInfo').then(handleResponse)
}