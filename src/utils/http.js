// http相关模块
import axios from 'axios'
import Vue from 'vue'
export const BASE_URL = '/api/v1'
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
    let data = resp.data
    
    if (data.status === 200) {
        return data.data
    }else if (data.status===201){
        this.$prompt('请输入邮箱', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
        }).then(({ value }) => {
            this.$message({
                type: 'success',
                message: '你的邮箱是: ' + value
            });
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消输入'
            });
        });
    }
    else {
        throw new RequestError(resp.data.message, resp.data.status)
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
    that.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(({ value }) => {
        that.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
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