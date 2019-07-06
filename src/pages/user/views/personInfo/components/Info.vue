<template>
    <div>
        <div class="bk":style="note2">
            <div class="info">
                <div class="button_group">
                    个人信息
                </div>
                <HR align=center width=1230px color=#7848ba  SIZE=2></HR>
            </div>
            <div class="user-info-name" >帐号名称:<span style="margin-left: 230px">{{vname}}</span></div>
            <div class="user-info-name">姓名:<span style="margin-left: 295px">{{name}}</span></div>
            <div class="user-info-name">身份证:<span style="margin-left: 260px">{{keyid}}</span></div>
            <div class="user-info-name">信誉度:<span style="margin-left: 260px">{{credit}}</span></div>
            <div v-if="show" class="user-info-name">电话:
                <span style="margin-left: 285px">{{phonenum}}
                    <el-button class="bt" plain @click="gai">修改</el-button>
                    </span>
            </div>
            <div v-else class="user-info-name">电话:
                <span >
                     <el-input class="bt-input" v-model="phonenum" placeholder="请输入"></el-input>
                     <el-button class="bt" plain @click="Enter">确认</el-button>
                    </span>
            </div>
            <div v-if="show2" class="user-info-name">密码:
                <span style="margin-left: 285px">{{pw}}
                    <el-button class="bt" plain @click="gai2">修改</el-button>
                    </span>
            </div>
            <div v-else class="user-info-name">密码:
                <span >
                    <el-input class="bt-input" placeholder="请输入新密码" v-model="pw" show-password></el-input>
                        <el-button class="bt" plain @click="Enter2">确认</el-button>
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
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
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
    .bk{
        width:100%;
        height: 620px;
        box-shadow:0px 0px  15px 5px #aaa;
    }

    .user-info-name{
        font-size:30px;
        line-height: 30px;
        margin-left: 150px;
        margin-top: 40px;
        font-family: "Times New Roman";
    }
    .bt-input{
        width: 300px;
        margin-left: 285px;
    }
    .bt{
        float:right;
        margin-right:200px;
        background-color: #7140b6;
        color: white;
    }
    .button_group{
        font-family:"Times New Roman";
        color: white;
        float: left;
        background-color: #7140b6;
        width:250px;
        line-height: 70px;
        text-align: center;
        font-size: 200%;
    }
</style>