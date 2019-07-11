import {handleResponse, server} from "../utils/http";
import qs from "qs";

//管路员进行仲裁
export function managerGet() {
    return  Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            tract:[
                {
                    "ownername":"xxdd",   //请求房主的名字
                    "owner":"曲延松",       //请求的房主的姓名
                    "username":"xxasfddd",  //请求房客的名字
                    "user":"刘鹏昊",       //请求的房客的的姓名
                    "house_id_hash":"adfafd",    //请求的房子房产证的hash
                    "commu_name":"茗筑美嘉",  //房子小区名
                    },

                {
                    "ownername":"sdfadfsa",   //请求房主的名字
                    "owner":"郭松岳",       //请求的房主的姓名
                    "username":"xxasfddd",   //请求房客的名字
                    "user":"王亚平",       //请求的房客的的姓名
                    "house_id_hash":"sfd",    //请求的房子房产证的hash
                    "commu_name":"江南水城",  //房子小区名
                },

]
},
    })
}

//管理员仲裁反馈
export function managerRes(username,ownername,res) {
    // console.log(form.get('profile'))
    return Promise.resolve({
        "status":200,
        "message":"OK",
    })
    return server.post('/tract/managerRes',  qs.stringify({username,ownername,res})).then(handleResponse)
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
            tract:[
                {
                    "username":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"茗筑美嘉",  //房子小区名
                    "tract_status":'submit'
                },
                {
                    "username":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "tract_status":'effect'
                },
                {
                    "username":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "tract_status":'refused'
                },
                {
                    "username":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "tract_status":'fail'
                },
                {
                    "username":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "tract_status":'userIden'
                },
                {
                    "username":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "tract_status":'finish'
                },
                {
                    "username":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "tract_status":'ownerIden'
                },
            ]

    })
    return server.get('/tract/ownerGet').then(handleResponse)
}

//房主回应请求
export function ownerRes(username,request_response) {
    // console.log(form.get('profile'))
    // return Promise.resolve({
    //     "status":200,
    //     "message":"OK",
    // })
    return server.post('/tract/ownerRes',  qs.stringify({username,request_response})).then(handleResponse)
}

//房主确认请求
export function ownerIden(username,request_response) {
    // console.log(form.get('profile'))
    // return Promise.resolve({
    //     "status":200,
    //     "message":"OK",
    // })
    return server.post('/tract/ownerIden',  qs.stringify({username,request_response})).then(handleResponse)
}

//用户获取房主反馈请求
export function userGet(){
    return Promise.resolve({
        "status":200,
        "message":"success",
            tract:[
                {
                    "ownername":"qys",   //请求房主的名字
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"茗筑美嘉",  //房子小区名
                    "tract_status":'submit'
                },
                {
                    "ownername":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "tract_status":'effect'
                },
                {
                    "ownername":"qys",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_id_hash":"adfafd",    //请求的房子hash
                    "commu_name":"奥龙官邸",  //房子小区名
                    "tract_status":'ownerIden'
                },
            ]

    })
    return server.get('/tract/userGet').then(handleResponse)
}

//房主回应请求并支付
export function userIden(ownername,requestIdentify) {
    // console.log(form.get('profile'))
    return Promise.resolve({
        "status":200,
        "message":"OK",
    })
    return server.post('/tract/userIden',  qs.stringify({ownername,requestIdentify})).then(handleResponse)
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
    return server.get('/user/changeinfo', {
        params: {
        }
    }).then(handleResponse)
}

//管理员修改用户信息
export function changeUserInfo(username,credit) {
    // console.log(form.get('profile'))
    return Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            "username":"qys",
            "credit":30
        }
    })
    return server.post('/user/contact_owner',  qs.stringify({house_hash})).then(handleResponse)
}



//获取房屋列表
export function getHouseList() {
    return  Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            "verified":[            //通过验证的房子
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

               {
                   "photo":"sadfadsfadf" ,  //一张图片的hash
                   "low_location":"山东省济南市历下区**小区",
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
    // return server.get('house/allInfo', {
    //     params: {
    //
    //     }
    // }).then(handleResponse)
}
//输入支付密码
export function payPass(payPass) {
    // console.log(form.get('profile'))
    // return Promise.resolve({
    //     "status":200,
    //     "message":"success",
    // })
    return server.post('/tract/payPass',  qs.stringify({payPass})).then(handleResponse)
}