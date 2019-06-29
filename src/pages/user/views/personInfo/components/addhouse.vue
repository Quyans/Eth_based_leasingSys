<template>
    <div>
        <div class="addhouse" :style="note">
            <div class="button_group">
                我的房子
            </div>
        </div>
        <div class="bk":style="note2">
            <div class="fir">
                <div class="phone">
                    上传图片
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    <div class="h-info">
                        房产证:<el-input
                            placeholder="请输入内容"
                            v-model="house_hash"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        房主身份证:<el-input
                            placeholder="请输入内容"
                            v-model="owner_id"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        房主帐号:<el-input
                            placeholder="请输入内容"
                            v-model="owner"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        房主姓名:<el-input
                            placeholder="请输入内容"
                            v-model="owner_name"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        房子可用:<el-input
                            placeholder="请输入内容"
                            v-model="state"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        省份:<el-input
                            placeholder="请输入内容"
                            v-model="provi"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        城市:<el-input
                            placeholder="请输入内容"
                            v-model="city"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        市区:<el-input
                            placeholder="请输入内容"
                            v-model="sector"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        小区:<el-input
                            placeholder="请输入内容"
                            v-model="commu_name"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        具体地址:<el-input
                            placeholder="请输入内容"
                            v-model="specific_location"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        楼层:<el-input
                            placeholder="请输入内容"
                            v-model="floor"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        有无电梯:
                        <el-input
                                placeholder="请输入内容"
                                v-model="elevator_text"
                                v-bind:disabled="showinput">
                        </el-input>
                    </div>
                    <div class="h-info">
                        价格:<el-input
                            placeholder="请输入内容"
                            v-model="lease"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        房型:<el-input
                            placeholder="请输入内容"
                            v-model="house_type"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div>
                        <el-button style="margin-left:200px" plain @click="Enter1">修改</el-button>
                        <el-button style="margin-left:200px" plain @click="Enter2">确认</el-button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {getMyHouse} from "../../../../../resource/house";
    export default {
        components: {},
        data() {

            return {
                showinput:true,
                shouphone:false,
                house_hash:0,
                owner_id:0,
                verify:0,
                owner:0,
                owner_name:0,
                state:0,
                provi:"",
                city:"",
                sector:"",
                commu_name:"",
                specific_location:"",
                floor:0,
                elevator:"",
                elevator_text:"",
                lease:0,
                house_type:0 , // 1 一室 2 二室 3 其他
                house_owner_credit:0,       //房主的信誉
                dialogImageUrl: '',
                dialogVisible: false,
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
                testObj:{}
            }
        },
        created(){
            getMyHouse().then(res => {
                this.house_hash = res.data.house_hash;
                this.owner_id = res.data.owner_id;
                this.owner = res.data.owner;
                this.verify = res.data.verify;
                this.owner_name = res.data.owner_name;
                this.state = res.data.state;
                this.provi = res.data.low_location.provi;
                this.city = res.data.low_location.city;
                this.sector =res.data.low_location.sector;
                this.commu_name = res.data.low_location.commu_name;
                this.specific_location = res.data.specific_location;
                this.floor = res.data.floor;
                this.elevator = res.data.elevator;
                if (this.elevator==true){
                    this.elevator_text="有电梯"
                } else {
                    console.log(this.elevator)
                    this.elevator_text="没有"
                }
                this.lease = res.data.lease;
                this.house_type = res.data.house_type;
                this.house_owner_credit = res.data.house_owner_credit;



            })

        },
        methods:{
            Enter1(){
                this.showinput = false;
                this.shouphone = true;
            },
            Enter2(){
                this.showinput = true;
                this.shouphone = false;
            },
            change_p(){
                src:'http://www.w3school.com.cn/example/html/venus.html';
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    .addhouse{
        width: 100%;
        height: 100px;
    }
    .bk{
        width:100%;
        height: 600px;
    }
    .button_group{
        color: white;
        float: left;
        margin-left: 40px;
        width:250px;
        line-height: 70px;
        font-size: 200%;
    }
    .phone{
        width:100%;
        height:400px;
    }
    .hourse{
        width:400px;
        float: left;
        margin-left: 50px;
    }
    .h-info{
        float: left;
        margin-left: 50px;
    }
</style>