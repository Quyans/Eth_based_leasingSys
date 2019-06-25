import {handleResponse, server} from "../utils/http";
import qs from "qs";

export function getUserInfo(id) {
    return  {
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
            "myhouse":[
                {
                    "commu_name":"奥龙官邸",
                    "house_hash":"sdfaafadsfasd"
                },

                {
                    "commu_name":"茗筑美嘉",
                    "house_hash":"sdfsdafsdfadf"
                },
            ]
        }
    }
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
    return {
        "status":200,
        "message":"success",
        "data":{
            "username":"liupenghao",//用户名
            "name":"刘鹏昊",//姓名
            "balance":85500  // 充值后余额
        }
    }
    return server.post('user/account',  qs.stringify({money})).then(handleResponse)
}


export function getUserBalance(username) {
    return  {
        "status":200,
        "message":"success",
        "data":{
            "username":"liupenghao",//用户名
            "name":"刘鹏昊",//姓名
            "balance":85500  // 余额
        }
    }
    // return server.get('user/balance', {
    //     params: {
    //         username
    //     }
    // }).then(handleResponse)
}

export function getTransRecord(username) {
    return  {
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
    }
    // return server.get('user/trans_record', {
    //     params: {
    //         username
    //     }
    // }).then(handleResponse)
}