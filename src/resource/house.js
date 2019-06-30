import {handleResponse, server} from "../utils/http";
import qs from "qs";

export function getMyHouse(house_hash) {
    return  Promise.resolve({
        "status":200,
        "message":"success",
        "data":{
            "house_pic":[
                "sdfadfasfasfasdfa",   //图片一的哈希值
                "sdfadsfadsfasf",
                "sadfadsfasfsa",
            ],
            "house_hash":"sdfwenk31345",//房产证号
            "owner_id":"37012506546564",//房主身份证号
            "verify":"true" ,  //经过验证
            "owner":"quyanso111",//拥有者的账号
            "owner_name":"曲延松",//拥有者的姓名
            "role":1,     //调用这个接口的人是管理者还是用户
            "state":0,    //可租用状态
            "low_location":{
                "provi":"山东省",
                "city":"济南市",
                "sector":"历下区",
                "commu_name":"奥龙官邸",
            },
            "specific_location":"2号楼3单元1801",
            "floor":18,
            "elevator":true,
            "lease":3800,
            "house_type":1 , // 1 一室 2 二室 3 其他
            "house_owner_credit":16,       //房主的信誉
            "house_comment":[
                {
                    "user_id":"quyans111",   //评论人账号名
                    "comment":"这个房子挺不错适合居住",   //评论内容
                    "comment_pic":[
                        "sdfadfasfasfasdfa",   //图片一的哈希值
                        "sdfadfasfasfasdfa",
                        "sdfadfasfasfasdfa",
                    ],
                },
                {
                    "user_id":"quyans111",   //评论人账号名
                    "comment":"这个房子挺不错适合居住",   //评论内容
                    "comment_pic":[
                        "sdfadfasfasfasdfa",   //图片一的哈希值
                        "sdfadfasfasfasdfa",
                        "sdfadfasfasfasdfa",
                    ],
                }
            ]
        }
    // return server.get('user/myhouse', {
    //     params: {
    //         house_hash
    //     }
    // }).then(handleResponse)
    })
}

//修改我的房子
export function updateHouseInfo(form) {
    console.log(form.get('profile'))
    return server.post('user/myhouse', form).then(handleResponse)
}
//增加房源
export function addHouse() {
    return server.post('user/myhouse', form).then(handleResponse)
}

//获取房源详细信息
export function getSpeInfo(house_hash) {
    return  Promise.resolve({
        "status":200,
        "message":"success",
        "data":{

            "house_pic":[
                "sdfadfasfasfasdfa",   //图片一的哈希值
                "sdfadsfadsfasf",
                "sadfadsfasfsa",
            ],
            "house_hash":"sdfwenk31345",//房产证号
            "owner_id":"37012506546564",//房主身份证号
            "verify":"true" ,  //经过验证
            "owner":"quyanso111",//拥有者的账号
            "owner_name":"曲延松",//拥有者的姓名
            "role":1,     //调用这个接口的人是管理者还是用户
            "state":0,    //可租用状态
            "low_location":{
                "provi":"山东省",
                "city":"济南市",
                "sector":"历下区",
                "commu_name":"奥龙官邸",
            },
            "specific_location":"2号楼3单元1801",
            "floor":18,
            "elevator":"true",
            "lease":3800,
            "house_type":1 , // 1 一室 2 二室 3 其他
            "house_owner_credit":16,       //房主的信誉
            "house_comment":[
                {
                    "user_id":"quyans111",   //评论人账号名
                    "comment":"这个房子挺不错适合居住",   //评论内容
                    "comment_pic":[
                        "sdfadfasfasfasdfa",   //图片一的哈希值
                        "sdfadfasfasfasdfa",
                        "sdfadfasfasfasdfa",
                    ],
                }
            ]
        }
        // return server.get('user/myhouse', {
        //     params: {
        //         house_hash
        //     }
        // }).then(handleResponse)
    })
}


export function searchLowHouse(low_location,lease_inter,house_type,lease_type,elevator) {
    // console.log(form.get('profile'))
    return Promise.resolve({
        "status": 200,
        "message": "success",
        "data": [
            {
                "photo": "sadfadsfadf",   //一张图片的hash
                "low_location": "山东省济南市历下区**小区",
                "lease": "5000",
                "house_type": "2",
                "lease_type": "1",
            },
            {
                "photo": "sadfadsfadf",   //一张图片的hash
                "low_location": "山东省济南市历下区**小区",
                "lease": "5000",
                "house_type": "2",
                "lease_type": "1",
            },
            {
                "photo": "sadfadsfadf",   //一张图片的hash
                "low_location": "山东省济南市历下区**小区",
                "lease": "5000",
                "house_type": "2",
                "lease_type": "1",
            },
        ]
    })
    return server.post('house/search',  qs.stringify({low_location, lease_inter,house_type,lease_type,elevator})).then(handleResponse)
}

export function compute_int2str(computedInfo) {
    // console.log(form.get('profile'))
    var temp = computedInfo;
    switch (computedInfo.house_type){
        case '0':
            temp.house_type='全部';
            break;
        case '1':
            temp.house_type='一室';
            break;
        case '2':
            temp.house_type='二室';
            break;
        case '3':
            temp.house_type='其他';
            break
    }

    switch (computedInfo.lease_type){
        case '0':
            temp.lease_type='全部';
            break;
        case '1':
            temp.lease_type='整租';
            break;
        case '2':
            temp.lease_type='合租';
            break;
    }

    return temp
}