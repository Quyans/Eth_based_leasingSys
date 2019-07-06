<template>
    <div>
        <div class="bk":style="note2">
            <div class="button_group">
                我的钱包
            </div>
            <HR align=center width=1230px color=#7848ba  SIZE=2></HR>
            <div class="user-info-name">余额:<span style="margin-left: 150px">{{num}}</span></div>
            <div  class="user-info-name">充值:
                <el-input class="bt-input" v-model="inn" placeholder="请输入"></el-input>
            </div>
            <el-button class="bt" plain @click="Enter">确认</el-button>
        </div>
    </div>
</template>

<script>
    import {invest,getUserBalance} from "../../../../../resource/user";
    export default {
        components: {},
        data() {
            return {
                num:200,
                inn:0,
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },

            }
        },
        created(){
            getUserBalance(123).then(res1=>{
                this.num = res1.balance
            })
        },
        methods:{

            Enter() {
                invest(this.inn).then(res=>{
                    this.num = res.balance
                })

            }
        }
    }
</script>

<style scoped lang="scss">

    .bk {
        width: 100%;
        height: 600px;
        box-shadow:0px 0px  15px 5px #aaa;
    }
    .user-info-name{
        font-size:30px;
        line-height: 30px;
        margin-left: 150px;
        margin-top: 50px;
    }
    .bt-input{
        width: 300px;
        margin-left: 140px;
    }
    .bt{
        float:left;
        color: white;
        margin-left:400px;
        margin-top:50px;
        width: 200px;
        height: 50px;
        background-color: #6e3eb4;
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
</style>