import {handleResponse, server} from "../utils/http";
import qs from "qs";


export function getMyHouse(house_id_hash) {
    return  Promise.resolve({
        "status":200,
        "message":"success",
            "house_pic":[
                "sdfadfasfasfasdfa",   //图片一的哈希值
                "sdfadsfadsfasf",
                "sadfadsfasfsa",
            ],
            "house_id_hash":"sdfaafadsfasd",//房产证号
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
                        "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg",
                    ],
                },
                {
                    "user_id":"quyans111",   //评论人账号名
                    "comment":"这个房子挺不错适合居住",   //评论内容
                    "comment_pic":[
                        "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg",
                    ],
                }
            ]
    // return server.post('user/myhouseInfo', {
    //     params: {
    //         house_hash
    //     }
    // }).then(handleResponse)
    })
}

//修改我的房子
export function updateHouseInfo(form) {
    return server.post('user/myHouse', form).then(handleResponse)
}
//增加房源
export function addHouse(form) {
    return server.post('house/setUpHouse', form).then(handleResponse)
}



//获取房源详细信息
export function getSpeInfo(house_id_hash) {
    // return  Promise.resolve({
    //     "status":200,
    //     "message":"success",
    //     "data":{
    //         "house_pic":[
    //             "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918490&di=93de199997bd27876fb3e72842da2551&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa403a1d2880ef70d311b0626f356f0682b8d77da524b-TAk0MZ_fw658",   //图片一的哈希值
    //             "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918489&di=5f7f910721b2c154270f1cdeca71dc67&imgtype=0&src=http%3A%2F%2Fpic8.nipic.com%2F20100713%2F1954049_091647155567_2.jpg",
    //             "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918489&di=08e89404ddf20c958c789cbd02a37282&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F67c0b0d20ca69f5a0a0167ab6526dcd2b6a1a3f046e3-l9OP6q_fw658",
    //         ],
    //         "house_hash":"sdfwenk31345",//房产证号
    //         "owner_id":"37012506546564",//房主身份证号
    //         "verify":"true" ,  //经过验证
    //         "owner":"quyanso111",//拥有者的账号
    //         "owner_name":"曲延松",//拥有者的姓名
    //
    //         "role":1,     //调用这个接口的人是管理者还是用户
    //         "state":0,    //可租用状态
    //         "low_location":{
    //             "provi":"山东省",
    //             "city":"济南市",
    //             "sector":"历下区",
    //             "commu_name":"奥龙官邸",
    //         },
    //         low_str_location:'山东省济南市历下区奥龙官邸',
    //         "specific_location":"2号楼3单元1801",
    //         "floor":18,
    //         "elevator":"true",
    //         "lease":3800,
    //         "house_type":1 , // 1 一室 2 二室 3 其他
    //         "house_owner_credit":16,       //房主的信誉
    //         "area":180,
    //         "house_comment":[
    //             {
    //                 "user_id":"quyans111",   //评论人账号名
    //                 "comment":"这个房子挺不错适合居住",   //评论内容
    //                 "comment_pic":[
    //                     "sdfadfasfasfasdfa",   //图片一的哈希值
    //                     "sdfadfasfasfasdfa",
    //                     "sdfadfasfasfasdfa",
    //                 ],
    //             }
    //         ]
    //     }
    // })
    // console.log(house_id_hash)
    // var house_id_hash="eHg6zhM8qYhIK/TzrDDYzg=="
    return server.post('house/speinfo', qs.stringify({house_id_hash})).then(handleResponse)
    // return server.post('house/speinfo',qs.stringify({house_id_hash})).then(handleResponse)
}


export function searchLowHouse(low_location,lease_inter,house_type,lease_type,elevator,page) {
    // console.log(123)
    // return Promise.resolve(
    //      [
    //         {"photo":"sadfadsfadf",   //一张图片的hash
    //             "low_str_location":"山东省济南市历下区**小区",
    //             "lease":"30",
    //             "house_type":"2",
    //             "lease_type":"1",
    //             "house_hash":"house1"},
    //         {
    //             "photo":"sadfadsfadf",   //一张图片的hash
    //             "low_str_location":"山东省济南市历下区**小区",
    //             "lease":"80000",
    //             "house_type":"2",
    //             "lease_type":"1",
    //             "house_hash":"house2"
    //         },
    //         {
    //             "photo":"sadfadsfadf",   //一张图片的hash
    //             "low_str_location":"山东省济南市历下区**小区",
    //             "lease":"300",
    //             "house_type":"2",
    //             "lease_type":"1",
    //             "house_hash":"house3"
    //         },{
    //             "photo":"sadfadsfadf",   //一张图片的hash
    //             "low_str_location":"山东省济南市历下区**小区",
    //             "lease":"70",
    //             "house_type":"2",
    //             "lease_type":"1",
    //             "house_hash":"house4"
    //         },{
    //             "photo":"sadfadsfadf",   //一张图片的hash
    //             "low_str_location":"山东省济南市历下区**小区",
    //             "lease":"5000",
    //             "house_type":"2",
    //             "lease_type":"1",
    //             "house_hash":"house5"
    //         },
    //         {
    //             "photo":"sadfadsfadf",   //一张图片的hash
    //             "low_str_location":"山东省济南市历下区**小区",
    //             "lease":"5000",
    //             "house_type":"2",
    //             "lease_type":"1",
    //             "house_hash":"house6"
    //         },
    //     ]
    // )
    var provi = low_location.provi;
    var city = low_location.city;
    var site_select = low_location.site_select

    return server.post('house/search',  qs.stringify({provi,city,site_select, lease_inter,house_type,lease_type,elevator,page})).then(handleResponse)
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