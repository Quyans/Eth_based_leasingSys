<template>
        <div class="bk":style="note2">
            <div class="button_group">
                用户管理
            </div>
            <HR align=center width=1200px color=#7848ba SIZE=2></HR>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="username"
                        label="用户名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="gender"
                        label="性别"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="phone"
                        label="电话"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="身份证号">
                </el-table-column>
                <el-table-column
                        label="信誉度"
                        width="100">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.credit" v-bind:disabled="showinput" placeholder="请输入内容"></el-input>
                        <el-button @click="handleClick(scope.$index)" type="text" size="small">修改</el-button>
                        <el-button @click="Enter(scope.$index)" type="text" size="small">确认</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
</template>

<script>

    import {getAllUser,changeUserInfo} from "../../../../../resource/user";
    export default {
        name: "userinfo",
        components: {},


        data() {
            return {
                newcredit:0,
                showinput:true,
                tableData:[],
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },
                data123:{}

            }
        },
        created(){
            getAllUser().then(res => {
                this.tableData = res.users;
            })
        },



        methods:{
            handleClick(){


                 this.showinput = !this.showinput;

            },
            Enter(row){
                this.showinput =true;
                var username = this.tableData[row].username;
                var credit = this.tableData[row].credit;
                changeUserInfo(username,credit).then(()=>{
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                },
                    e => {
                        this.$message.error(`出错：${e.message}`);
                    });

            }
        }
    }
</script>

<style scoped lang="scss">

    .bk{
        width:100%;
        height: 600px;
        overflow-y: scroll;
        box-shadow:0px 0px  15px 5px #aaa;

    }
    .button_group{
        color: white;
        background-color: #6e3eb4;
        float: left;
        text-align: center;
        width:250px;
        line-height: 50px;
        font-size: 150%;
    }
</style>