<template>
    <div>
        <div class="bk":style="note2">
            <div class="button_group">
                我的房子
            </div>
            <HR align=center width=1200px color=#7848ba SIZE=2></HR>
            <el-row style="width: 100%">
                <el-col :span="10">
                    <div class="phone">
                        <el-carousel class="hourse" trigger="click" height="310px">
                            <el-carousel-item v-for="item in phonelist">
                                <img class="myHousePhoto" :src="item">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="preview">
                        评论：
                        <template v-for="comment in tableData">
                            <div style="margin-top: 30px">
                                <div>评论人：{{comment.user_id}}</div>
                                <div>评价：{{comment.comment}}</div>
                                <div><img :src="comment.comment_pic"></div>
                                <HR align=center width=800 color=black SIZE=2></HR>
                            </div>
                        </template>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="h-info">
                        房产证:<span style="margin-left:30px">{{registerForm.house_id_hash}}</span>
                    </div>
                    <div class="h-info">
                        房主帐号:<span style="margin-left:30px">{{owner}}</span>
                    </div>
                    <div class="h-info">
                        房主姓名:<span style="margin-left:30px">{{owner_name}}</span>
                    </div>
                    <div class="h-info">
                        省份:<span style="margin-left:80px">{{provi}}</span>
                    </div>
                    <div class="h-info">
                        市区:<span style="margin-left:80px">{{sector}}</span>
                    </div>
                    <div class="h-info">
                        具体地址:<span style="margin-left:0">{{specific_location}}</span>
                    </div>
                    <div class="h-info">
                        房子可用:<el-input
                            style="width: 100px;margin-left: 10px"
                            placeholder="请输入内容"
                            v-model="registerForm.state"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        价格:<el-input
                            style="width: 100px;margin-left: 50px;"
                            placeholder="请输入内容"
                            v-model="registerForm.lease"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        有无电梯:
                        <el-input
                                style="width: 100px;margin-left: 5px"
                                placeholder="请输入内容"
                                v-model="elevator_text"
                                v-bind:disabled="showinput">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="h-info">
                        房主身份证:<span style="margin-left: 10px">{{owner_id}}</span>
                    </div>
                    <div class="h-info">
                        房源验证:<span style="margin-left:50px">{{verify}}</span>
                    </div>
                    <div class="h-info">
                        房主信誉:<span style="margin-left:50px">{{house_owner_credit}}</span>
                    </div>
                    <div class="h-info">
                        城市:<span style="margin-left:50px">{{city}}</span>
                    </div>
                    <div class="h-info">
                        小区:<span style="margin-left:50px">{{commu_name}}</span>
                    </div>
                    <div class="h-info" >
                        楼层:<span style="margin-left:50px">{{floor}}</span>
                        房型:<span style="margin-left:30px">{{house_type}}</span>
                    </div>
                    <div class="h-info" >
                        配套设施:<p style="margin-left:50px;width: 100%">{{accessory}}</p>
                    </div>
                    <div class="h-info">
                        <el-button style="margin-left:50px;margin-top: 30px;width: 100px;background-color: #6e3eb4;color: white" plain @click="Enter1">修改</el-button>
                        <el-button style="margin-left: 50px;width: 100px;background-color: #6e3eb4;color: white" plain @click="Enter2">确认</el-button>
                    </div>
                    <div class="h-info" v-show="shouphone">
                        上传图片：{{registerForm.picture}}
                        <el-upload
                                action=""
                                list-type="picture-card"
                                :on-change="handleRemove">
                            <img v-if="imageUrl_a" :src="imageUrl_a"class="avatar">
                        </el-upload>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {compressImage} from "../../../../../utils";
    import {getMyHouse,updateHouseInfo} from "../../../../../resource/house";

    export default {
        name:"Myhouse",
        components: {},
        props:{
            house_hash:{
                required:true,
                type:String,
            }
        },
        data() {
            return {
                hash:"house_hash",
                houseId:"",
                tableData:[],
                imageUrl_a:"",
                registerForm:{
                    state:0,
                    house_id_hash:0,
                    elevator:"",
                    lease:0,
                    picture:false,
                },
                showinput:true,
                shouphone:false,
                accessory:"",
                owner_id:0,
                verify:0,
                owner:0,
                owner_name:0,
                provi:"",
                city:"",
                sector:"",
                commu_name:"",
                specific_location:"",
                floor:0,
                elevator_text:"",
                house_type:0 , // 1 一室 2 二室 3 其他
                house_owner_credit:0,       //房主的信誉
                dialogImageUrl: '',
                dialogVisible: false,
                phonelist:[
                    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg',
                    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg',
                    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg',
                    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg'
                ],
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },
                testObj:{}
            }
        },
        created(){
            getMyHouse(this.hash).then(res => {
                this.tableData = res.house_comment;
                this.registerForm.house_id_hash = res.house_id_hash;
                this.owner_id = res.owner_id;
                this.owner = res.owner;
                this.verify = res.verify;
                this.owner_name = res.owner_name;
                this.registerForm.state = res.state;
                this.provi = res.low_location.provi;
                this.city = res.low_location.city;
                this.sector =res.low_location.sector;
                this.commu_name = res.low_location.commu_name;
                this.specific_location = res.specific_location;
                this.floor = res.floor;
                this.accessory = res.accessory;
                this.registerForm.elevator = res.elevator;
                if (this.elevator==true){
                    this.elevator_text="有电梯"
                } else {
                    console.log(this.elevator)
                    this.elevator_text="没有"
                }
                this.registerForm.lease = res.lease;
                this.house_type = res.house_type;
                this.house_owner_credit = res.house_owner_credit;
            })

        },

        computed: {
            ruleFormData() {
                let formData = new FormData()
                // console.log(this.ruleForm);
                Object.keys(this.registerForm).forEach(key => {
                    // if (key === 'checkpassword') return
                    formData.append(key, this.registerForm[key])
                })
                // console.log(formData)
                return formData
            }
        },
        methods:{
            Enter1(){
                this.showinput = false;
                this.shouphone = true;
            },
            Enter2(){
                this.showinput = true;
                this.shouphone = false;
                var that = this;
                new Promise(resolve => {
                    // 图片压缩
                    let formData = this.ruleFormData;
                    let img = new Image();
                    img.src = URL.createObjectURL(formData.get('picture'));
                    img.onload = () => {
                        compressImage(img).then(file => {
                            formData.append('picture',file);
                            resolve(formData)
                        })
                    }
                }).then(formData => updateHouseInfo(formData))
                    .then(() => {
                            this.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                        },
                        e => {
                            this.$message.error(`出错：${e.message}`);
                        })

            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
                this.registerForm.picture = file.raw;
                this.imageUrl_a = URL.createObjectURL(file.raw);
            },
        }
    }
</script>



<style scoped lang="scss">

    .bk{
        width:100%;
        height:600px;
        overflow-y: scroll;
        box-shadow:0px 0px  15px 5px #aaa;
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

    .hourse{
        width:490px;
        float: left;
        margin-left:10px;
    }
    .preview{
        font-size: 25px;
    }
    .h-info{
        font-size: 20px;
        margin-top: 5px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .myHousePhoto{
        width: 100%;
        height: 100%;
    }
</style>