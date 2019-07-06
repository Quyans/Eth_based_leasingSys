<template>
    <!--<router-link :to='"/house/"+ rough_info.house_hash'>-->
        <div :style="note" class="roughHouse" @click="goSpecInfo()">
            <el-row style="height: 100%">
                <el-col :span="12">
                    <div class="houseImg">

                    </div>
                </el-col>
                <el-col :span="12">
                    <div>
                        <p >{{rough_info.lease}}</p>
                        <p >{{rough_info.low_str_location}}</p>
                        <p >{{rough_info.house_type}}</p>
                        <p >{{rough_info.lease_type}}</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    <!--</router-link>-->
</template>

<script>
    import {compute_int2str} from "../../../../../resource/house"

    export default {
        name: "RoughHouse",
        created(){
            // console.log(this.roughInfo)
            this.computedInfo = this.roughInfo
            this.update()
        },
        watch:{
            roughInfo:function (val) {
                // alert(123)
                this.computedInfo = val
                this.update()
            }
        },

        data(){
            return{
                rough_info:{
                    photo:"",   //一张图片的hash
                    low_str_location:"s",
                    lease:"",
                    house_type:"",
                    lease_type:"",
                    house_hash:"",
                },
                note:{
                  backgroundColor:''
                },

                computedInfo:{
                    "photo":"sadfadsfadf",   //一张图片的hash
                    "low_str_location":"山东省济南市历下区**小区",
                    "lease":"5000",
                    "house_type":"2",
                    "lease_type":"1",
                }
            }
        },
        props:[
            'roughInfo','styNum'
        ],
        methods:{
            update(){
                this.rough_info = compute_int2str(this.computedInfo)
                var color = this.setBackColor(this.styNum)
                this.note.backgroundColor=color
                // console.log(color)
                // document.getElementById("roughDiv").style.backgroundColor=color
            },
            goSpecInfo(){
                this.$router.push(`/house/${this.rough_info.house_hash}`)
            },
            setBackColor(num){
                switch (num){
                    case 0:
                        return '#fcb79d';
                    case 1:
                        return '#feeeda';
                    case 2:
                        return '#646bd9';
                    case 3:
                        return '#974ec3';
                    case 4:
                        return '#504099';
                    case 5:
                        return '#746493'
                    case null:
                        return 'white'
                }
            }
        }
    }
</script>



<style>
    .roughHouse{
        height: 200px;
        width: 80%;
        margin: 10px 1%;
        /*background-color: antiquewhite;*/
        display: inline-block;
        box-shadow: 4px 4px 13px grey;
    }
    .roughHouse .houseImg{
        height: 100%;
        width: 100%;
        background-image: url("../../../../../image/testRoughHouse.png");
        background-size: cover;
    }
    .roughHouse .el-col-12{
        height: 100%;
    }
</style>