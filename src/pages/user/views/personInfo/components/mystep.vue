<template>
    <div>
        <div class="bk":style="note2">
            <div class="button_group">
                我的足迹
            </div>
            <HR align=center width=1210px color=#7848ba  SIZE=2></HR>
            <div style="width: 100%; text-align: center;padding-top: 50px">
                <div v-for="item in computed_rough_Info " style="width: 30%;display: inline-block;margin: 20px 0" >
                    <RoughHouse  style="margin: 0 auto" :styNum="item.styNum" :roughInfo="item"></RoughHouse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RoughHouse from "./RoughHouse"
    import {getmystep} from "../../../../../resource/user";
    import {calRoughUrl} from "../../../../../resource/ipfs";

    export default {
        components: {RoughHouse},
        data() {
            return {
                computed_rough_Info:[
                ],
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },

            }
        },
        created(){
         getmystep().then(res=>{
             var temp = res;
             var len = temp.length
             for (var i = 0;i<len;i++){
                 temp[i].styNum = i
             }
             var temp2 = calRoughUrl(temp)
             this.computed_rough_Info = temp2

         })
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">

    .bk {
        width: 100%;
        height: 600px;
        overflow-y: scroll;
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
        line-height: 50px;
        text-align: center;
        font-size: 150%;
    }
</style>