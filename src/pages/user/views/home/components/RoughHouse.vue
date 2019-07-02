<template>
    <router-link :to='"/house/"+ rough_info.house_hash'>
        <div class="roughHouse" @click="goSpecInfo()">
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
    </router-link>
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
            'roughInfo'
        ],
        methods:{
            update(){
                this.rough_info = compute_int2str(this.computedInfo)
            },
            goSpecInfo(){

            }
        }
    }
</script>



<style>
    .roughHouse{
        height: 200px;
        width: 80%;
        background-color: antiquewhite;
        display: inline-block;
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