// http相关模块
import axios from 'axios'
import Vue from 'vue'
import {payPass} from '../resource/tract'
export const BASE_URL = '/api'
export let server = axios.create({
    baseURL: BASE_URL
})


server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.params = config.params || {}
    config.params.t = Date.now()
    return config
})

// 请求返回时的Error
export class RequestError extends Error {
    constructor(message, status) {
        super()
        this.message = message
        this.status = status
    }
}

export const handleResponse = resp => {
    let data = resp
    
    if (data.status === 200) {
        console.log(123)
        return data.data
    }else if (data.status===201){
        return testtanchuang()
    }
    else {
        throw new RequestError(resp.message, resp.status)
    }
}

export function testtanchuang(){

    var one=new Vue({
        data: {
            title: "i am one"
        },
        methods: {},
    })
    var that = one;
    that.$prompt('请输入支付密码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(({ value }) => {
            payPass(value).then(res=>{
                that.$message({
                    type: 'success',
                    message: '成功提交 '
                })
        });
    }).catch(() => {
        that.$message({
            type: 'info',
            message: '取消输入'
        });
    });
    var list = document.getElementsByClassName("el-message-box")
    list[0].id="test"
}