<template>
    <div class="">
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
                                <el-button size="small" @click="no(scope.$index)">拒绝</el-button>
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
                                    <span class="message-title">{{scope.row.title}}</span>
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
    import {ownerGet,userGet} from "../../../../../resource/user";

    export default {
        name: 'tabs',
        data() {
            return {
                message: 'first',
                showHeader: false,
                unread: [{
                    date: '2018-04-19 20:00:00',
                    title: 'xxxx想跟你签订合约',
                },{
                    date: '2018-04-19 21:00:00',
                    title: 'xxxx合约取消',
                }],
                second:[],

                read: [{
                    date: '2018-04-19 20:00:00',
                    title: '合约签订'
                }],
                recycle: [{
                    date: '2018-04-19 20:00:00',
                    title: '合约取消'
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

        methods: {
            yes(index) {
                const item = this.unread.splice(index, 1);
                console.log(item);
                this.read = item.concat(this.read);

            },
            no(index) {
                const item = this.unread.splice(index, 1);
                console.log(item);
                this.read = item.concat(this.read);
            },
            pay(index) {
                const item = this.second.splice(index, 1);
                console.log(item);
                this.read = item.concat(this.read);
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

<style>
    .message-title{
        cursor: pointer;
    }
    .handle-row{
        margin-top: 30px;
    }
</style>

