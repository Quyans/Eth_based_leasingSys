import {handleResponse, server} from "../utils/http";
import qs from "qs";



export function userSet(house_hash,owner) {
    // console.log(form.get('profile'))
    return Promise.resolve({
        "status":200,
        "message":"success",
        "data": {
            "requestID": "xxoo",
        }
    })
    return server.post('/tract/userSet',  qs.stringify({house_hash, owner})).then(handleResponse)
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