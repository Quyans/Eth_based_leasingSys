<template>
    <div class="tabs">
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`未处理请求(${unread.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                请求人帐号：<span class="message-title">{{scope.row.username}}</span>
                                姓名：<span class="message-title">{{scope.row.name}}</span>
                                房子：<span class="message-title">{{scope.row.house_hash}}</span>
                                房子地址：<span class="message-title">{{scope.row.commu_name}}</span>
                                <div v-if="scope.row.state==0">
                                请求状态：<span class="message-title">等待处理</span>
                                </div>
                                <div v-else-if="scope.row.state==1">
                                    请求状态：<span class="message-title">等待房客处理</span>
                                </div>
                                <div v-else-if="scope.row.state==2">
                                    <div v-if="scope.row.res == true">
                                       请求状态：<span class="message-title">等待支付</span>
                                    </div>
                                    <div v-else>
                                        请求状态：<span class="message-title">已被拒绝</span>
                                    </div>
                                </div>
                                <div v-else>
                                    请求状态：<span class="message-title">完成合约</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <div v-if="scope.row.state==0">
                                <el-button size="small" @click="yes(scope.$index)">支付</el-button>
                                <div style="float: right;margin-right: 45px">
                                <el-button size="small" @click="no(scope.$index)">拒绝</el-button>
                                </div>
                                </div>
                                <div v-if="scope.row.state==1">
                                    等待处理中
                                </div>
                                <div v-if="scope.row.state==2">
                                    <div v-if="scope.row.res == true">
                                    <el-button size="small" @click="pay(scope.$index)">确认</el-button>
                                    </div>
                                    <div v-else>
                                        已被拒绝
                                    </div>
                                </div>
                                <div v-if="scope.row.state==3">
                                    合约完成
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
    import {ownerGet,userGet,ownerRes,userIden} from "../../../../../resource/tract";

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
                this.unread = res.data.tract
            })
    },

        methods: {
            yes(index) {
                this.request_response = true;
                ownerRes(this.request_response);
                this.$prompt('请输入密码', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '支付成功',
                    });
                    userIden(this.request_response,value);
                    this.$router.go(0);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });

            },
            no(index) {
                this.request_response = false;
                ownerRes(this.request_response);
                this.$router.go(0);
            },
            pay(index) {
                this.$prompt('请输入密码', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true,
                }).then(({ value }) => {
                    this.request_response = true;
                    this.pay_password = this.value;
                    this.$message({
                        type: 'success',
                        message:'支付成功'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
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
        height: 100%;
    }
    .message-title{
        cursor: pointer;
    }
    .handle-row{
        margin-top: 30px;
    }
</style>

