<template>
    <div class="tabs">
        <div class="button_group">
            我的通知
        </div>
        <HR align=center width=1200px color=#7848ba SIZE=2></HR>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`房主消息列表(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                请求人帐号：<span class="message-title">{{scope.row.username}}</span>
                                姓名：<span class="message-title">{{scope.row.name}}</span>
                                房子：<span class="message-title">{{scope.row.house_id_hash}}</span>
                                房子地址：<span class="message-title">{{scope.row.commu_name}}</span>
                                <div v-if="scope.row.tract_status=='submit'">
                                    请求状态：<span class="message-title">等待支付</span>
                                </div>
                                <div v-else-if="scope.row.tract_status=='effect'">
                                    请求状态：<span class="message-title">合约已生效</span>
                                </div>
                                <div v-else-if="scope.row.tract_status=='finish'">
                                    请求状态：<span class="message-title">合约已完成</span>
                                </div>
                                <div v-else-if="scope.row.tract_status=='fail'">
                                    请求状态：<span class="message-title">合约失败</span>
                                </div>
                                <div v-else-if="scope.row.tract_status=='refused'">
                                    请求状态：<span class="message-title">已拒绝</span>
                                </div>
                                <div v-else-if="scope.row.tract_status=='ownerIden'">
                                    请求状态：<span class="message-title">你已确认</span>
                                </div>
                                <div v-else-if="scope.row.tract_status=='userIden'">
                                    请求状态：<span class="message-title">对方已确认</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <div v-if="scope.row.tract_status=='submit'">
                                    <el-button size="small" @click="pay(scope.row)">支付</el-button>
                                    <div style="float: right;margin-right: 45px">
                                        <el-button size="small" @click="no1(scope.row)">拒绝</el-button>
                                    </div>
                                </div>
                                <div v-if="scope.row.tract_status=='effect'">
                                    合约生效中
                                </div>
                                <div v-if="scope.row.tract_status=='refused'">
                                    你已经拒绝了这个请求
                                </div>
                                <div v-if="scope.row.tract_status=='finish'">
                                    合约完成
                                </div>
                                <div v-if="scope.row.tract_status=='fail'">
                                    合约失败
                                </div>
                                <div v-if="scope.row.tract_status=='ownerIden'">
                                    你以确认，等待对方确认
                                </div>
                                <div v-if="scope.row.tract_status=='userIden'">
                                    <el-button size="small" @click="yes(scope.row)">确认</el-button>
                                    <div style="float: right;margin-right: 45px">
                                        <el-button size="small" @click="no(scope.row)">拒绝</el-button>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import {ownerGet,ownerIden,ownerRes} from "../../../../../resource/tract";

    export default {
        name: 'tabs',
        data() {
            return {
                message: 'first',
                showHeader: false,
                unread: [],
                request_response: false,
                pay_password:0,
                read: [],
                recycle: [{
                }]
            }
        },

        created(){
            ownerGet().then(res=>{
                this.unread = res.tract
            })
        },

        methods: {
            yes(index) {
                this.request_response = true;
                ownerIden(index.username,this.request_response);
                this.$router.go(0);
            },
            no(index) {
                this.request_response = false;
                ownerIden(index.username,this.request_response);
                this.$router.go(0);
            },
            pay(index) {
                this.request_response = true;
                ownerRes(index.username,this.request_response);
                this.$router.go(0);
            },
            no1(index){
                this.request_response = false;
                ownerRes(index.username,this.request_response);
                this.$router.go(0);
            }
        },
        computed: {
            unreadNum(){
                return this.unread.length;
            }
        }
    }

</script>

<style>
    .tabs{
        width: 100%;
        height: 550px;
        box-shadow:0px 0px  15px 5px #aaa;
    }
    .button_group{
        color: white;
        float: left;
        background-color: #7140b6;
        width:250px;
        line-height: 70px;
        text-align: center;
        font-size: 200%;
    }
    .message-title{
        cursor: pointer;
    }
</style>

