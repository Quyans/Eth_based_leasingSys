//计算哈希值到url
export function calUrl(hashList) {
    var baseUrl = 'http://211.87.230.14:8080/ipfs/'
    var temp = hashList
    for (var i = 0; i<hashList.length; i++){
        temp[i] = baseUrl+hashList[i]
    }
    console.log(temp)
    return temp
}