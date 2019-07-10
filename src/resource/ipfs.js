//计算哈希值到url
var baseUrl = 'http://211.87.230.22:8080/ipfs/'
export function calUrl(hashList) {

    var temp = hashList
    for (var i = 0; i<hashList.length; i++){
        temp[i] = baseUrl+hashList[i]
    }
    console.log(temp)
    return temp
}

export function calRoughUrl(list) {

    var temp = list
    for (var i = 0; i<list.length; i++){
        temp[i].house_pic = baseUrl+list[i].house_pic
    }
    // console.log(temp)
    return temp
}