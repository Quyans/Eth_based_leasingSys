<template>
    <div>
        <div class="pocket" :style="note">
            <div class="button_group">
                我的钱包
            </div>
        </div>
        <div class="bk":style="note2">
            <div class="user-info-name1">余额:<span style="margin-left: 250px">{{num}}</span></div>
            <div  class="user-info-name">充值:
                <el-input class="bt-input" v-model="inn" placeholder="请输入"></el-input>
            </div>
            <el-button style="float:left;margin-left:600px;margin-top: 50px" plain @click="Enter">确认</el-button>
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
            getUserBalance().then(res1=>{
                this.num = res1.data.balance
            })
        },
        methods:{

            Enter() {
                invest(this.inn).then(res=>{
                this.num = res.data.balance
            })

            }
        }
    }
</script>

<style scoped lang="scss">
    .pocket{
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
        margin-left: 240px;
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