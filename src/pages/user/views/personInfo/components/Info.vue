<template>
    <div>
        <div class="info" :style="note">
            <div class="button_group">
                个人信息
            </div>
        </div>
        <div class="bk":style="note2">

                <div class="user-info-name1" >帐号名称:<span style="margin-left: 250px">{{vname}}</span></div>
                <div class="user-info-name">姓名:<span style="margin-left: 315px">{{name}}</span></div>
                <div class="user-info-name">身份证:<span style="margin-left: 280px">{{keyid}}</span></div>
                <div class="user-info-name">信誉度:<span style="margin-left: 280px">{{credit}}</span></div>
                <div v-if="show" class="user-info-name">电话:
                    <span style="margin-left: 305px">{{phonenum}}
                    <el-button style="float:right;margin-right:200px" plain @click="gai">修改</el-button>
                    </span>
                </div>
                <div v-else class="user-info-name">电话:
                    <span >
                     <el-input class="bt-input" v-model="phonenum" placeholder="请输入"></el-input>
                     <el-button style="float:right;margin-right:200px" plain @click="Enter">确认</el-button>
                    </span>
                </div>
                <div v-if="show2" class="user-info-name">密码:
                    <span style="margin-left: 305px">{{pw}}
                    <el-button style="float:right;margin-right:200px" plain @click="gai2">修改</el-button>
                    </span>
                 </div>
                <div v-else class="user-info-name">密码:
                <span >
                    <el-input class="bt-input" placeholder="请输入新密码" v-model="pw" show-password></el-input>
                        <el-button style="float:right;margin-right:200px" plain @click="Enter2">确认</el-button>
                    </span>
                </div>
        </div>
    </div>
</template>

<script>

    import {getUserInfo,updateUserInfo} from "../../../../../resource/user";
    export default {
        name: "Info",
        components: {},


        data() {
            return {
                vname:"",
                name:"",
                keyid:"",
                phonenum:0,
                pw:0,
                credit:0,
                show:true,
                show2:true,
                note: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk3.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk1.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },

            }
        },
        created(){
            getUserInfo(123).then(res => {
                this.vname = res.data.username;
                this.name = res.data.name;
                this.phonenum = res.data.phone;
                this.keyid = res.data.id;
                this.credit = res.data.credit;
                this.pw = res.data.password
            })
        },



        methods:{
           gai(){
                  this.show = !this.show;
                },
                Enter(){
                this.show=true;
                updateUserInfo(this.pw,this.phonenum)
                },
            gai2(){
                this.show2 = !this.show2;
            },
            Enter2(){
                this.show2=true;
                updateUserInfo(this.pw,this.phonenum)
            }
        }
    }
</script>

<style scoped lang="scss">
    .info{
        width: 100%;
        height: 100px;
    }
    .bk{
        width:100%;
        height: 600px;
    }
    .user-info-name1{
        font-size:30px;
        line-height: 30px;
        margin-left: 250px;
    }
     .user-info-name{
        font-size:30px;
        line-height: 30px;
        margin-left: 250px;
        margin-top: 50px;
    }
    .bt-input{
        width: 300px;
        margin-left: 305px;
    }
    .button_group{
        color: white;
        float: left;
        margin-left: 40px;
        width:250px;
        line-height: 70px;
        font-size: 200%;
    }
</style>