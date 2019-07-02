<template>
    <div style="width: 100%">
        <notify :content="tract"></notify>

        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`未处理请求(${unread.length+second.length})`" name="first">
                    <el-table :data="unread" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                请求人帐号：<span class="message-title">{{scope.row.username}}</span>
                                姓名：<span class="message-title">{{scope.row.name}}</span>
                                房子：<span class="message-title">{{scope.row.house_hash}}</span>
                                房子地址：<span class="message-title">{{scope.row.commu_name}}</span>
                                请求状态：<span class="message-title">{{scope.row.state}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">

                                <el-button size="small" @click="yes(scope.$index)">同意</el-button>
                                <div style="float: right;margin-right: 45px">
                                    <el-button size="small" @click="no(scope.$index)">拒绝</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table :data="second" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template slot-scope="scope">
                                请求人帐号：<span class="message-title">{{scope.row.username}}</span>
                                姓名：<span class="message-title">{{scope.row.name}}</span>
                                房子：<span class="message-title">{{scope.row.house_hash}}</span>
                                房子地址：<span class="message-title">{{scope.row.commu_name}}</span>
                                请求状态：<span class="message-title">{{scope.row.state}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                        <el-table-column width="120">
                            <template slot-scope="scope">
                                <el-button size="small" @click="pay(scope.$index)">支付</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="`已处理消息(${read.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="read" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    请求人帐号：<span class="message-title">{{scope.row.username}}</span>
                                    姓名：<span class="message-title">{{scope.row.name}}</span>
                                    房子：<span class="message-title">{{scope.row.house_hash}}</span>
                                    房子地址：<span class="message-title">{{scope.row.commu_name}}</span>
                                    请求状态：<span class="message-title">{{scope.row.state}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                            <el-table-column width="120">
                                <template slot-scope="scope">
                                    <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>


</template>

<script>
    import notify from "./notify"
    import {ownerGet,userGet,ownerRes,userIden} from "../../../../../resource/tract";
    export default {
        name: "tabsUser",
        components: {
            notify
        },
        data(){
            return{
                tract:{
                    "requestID":"xxoo",
                    "username":"xxdd",   //请求的人的用户名
                    "name":"曲延松",       //请求的人的姓名
                    "house_hash":"adfafd",    //请求的房子hash
                    "commu_name":"茗筑美嘉",  //房子小区名
                    "state":1    //  0未回复  1 卖家同意买家未确认  2 买家确认卖家未确认 3、 卖家确认
                },



                message: 'first',
                showHeader: false,
                unread: [],
                second:[],
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
            }),
                userGet().then(res1=>{
                    this.second = res1.data.tract
                })
        },
        methods:{
            yes(index) {
                const item = this.unread.splice(index, 1);
                console.log(item);
                this.read = item.concat(this.read);
                this.request_response = true;
                ownerRes(this.request_response);
            },
            no(index) {
                const item = this.unread.splice(index, 1);
                console.log(item);
                this.read = item.concat(this.read);
                this.request_response = false;
                ownerRes(this.request_response);
            },
            pay(index) {
                this.$prompt('请输入密码', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    const item = this.second.splice(index, 1);
                    console.log(item);
                    this.read = item.concat(this.read);
                    this.request_response = true;
                    this.pay_password = this.value;
                    userIden(request_response,pay_password)
                    this.$message({
                        type: 'success',
                    });
                }).catch(() => {

                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            handleDel(index) {
                const item = this.read.splice(index, 1);
                this.recycle = item.concat(this.recycle);
            },
            handleRestore(index) {
                const item = this.recycle.splice(index, 1);
                this.read = item.concat(this.read);
            }
        },
        computed: {
            unreadNum(){
                return this.unread.length;
            }
        }
    }
</script>

<style scoped>

</style>