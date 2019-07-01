<template>
    <div>
        <div class="Myhouse" :style="note">
            <div class="button_group">
                我的房子
            </div>
        </div>
        <div class="bk":style="note2">
         <div class="fir">
            <div class="phone">
                <el-carousel class="hourse" trigger="click" height="300px">
                    <el-carousel-item v-for="item in phonelist" :key="item.key">
                        <img :src="item.src">
                    </el-carousel-item>
                </el-carousel>
                <div class="h-info">
                    房产证:<span style="margin-left:50px">{{registerForm.house_hash}}</span>
                </div>
                <div class="h-info" style="margin-left: 50px">
                房主身份证:<span style="margin-left:30px">{{owner_id}}</span>
                 </div>
                <div class="h-info">
                    房源验证:<span style="margin-left:30px">{{verify}}</span>
                </div>
                <div class="h-info" style="margin-left: 165px">
                    房主帐号:<span style="margin-left:50px">{{owner}}</span>
                </div>
                <div class="h-info">
                    房主姓名:<span style="margin-left:30px">{{owner_name}}</span>
                </div>
                <div class="h-info" style="margin-left: 135px">
                房主信誉:<span style="margin-left:50px">{{house_owner_credit}}</span>
                </div>
                <div class="h-info">
                    省份:<span style="margin-left:80px">{{provi}}</span>
                </div>
                <div class="h-info" style="margin-left: 135px">
                    城市:<span style="margin-left:50px">{{city}}</span>
                </div>
                <div class="h-info">
                    市区:<span style="margin-left:80px">{{sector}}</span>
                </div>
                <div class="h-info" style="margin-left: 135px">
                    小区:<span style="margin-left:50px">{{commu_name}}</span>
                </div>
                <div class="h-info">
                    具体地址:<span style="margin-left:30px">{{specific_location}}</span>
                </div>
                <div class="h-info" style="margin-left: 30px">
                    楼层:<span style="margin-left:50px">{{floor}}</span>
                </div>
                <div class="h-info">
                    房型:<span style="margin-left:30px">{{house_type}}</span>
                </div>
                <div class="h-info">
                    房子可用:<el-input
                        placeholder="请输入内容"
                        v-model="registerForm.state"
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
                        v-model="registerForm.lease"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    <el-button style="margin-left:50px;margin-top: 30px" plain @click="Enter1">修改</el-button>
                    <el-button style="margin-left: 50px" plain @click="Enter2">确认</el-button>
                </div>
                <div class="h-info" v-show="shouphone">
                    上传图片：{{registerForm.picture}}
                <el-upload
                        action=""
                        list-type="picture-card"
                        :on-change="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                </div>
                <div class="h-info">
                    评论：
                <template v-for="comment in tableData">
                    <div>
                        <div>评论人：{{comment.user_id}}</div>
                        <div>评价：{{comment.comment}}</div>
                        <div><img :src="comment.comment_pic"></div>
                        <el-divider content-position="center">分割线</el-divider>
                    </div>
                </template>
                </div>
            </div>

         </div>
        </div>
    </div>
</template>

<script>
    import {getMyHouse,updateHouseInfo} from "../../../../../resource/house";
    export default {
        components: {},
        data() {

            return {
                tableData:[],
                registerForm:{
                    state:0,
                    house_hash:0,
                    elevator:"",
                    lease:0,
                    picture:false,
                },
                showinput:true,
                shouphone:false,
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
                    {key: '1', src: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg'},
                    {key: '2', src: ''}
                ],
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
                this.tableData = res.data.house_comment;
                this.registerForm.house_hash = res.data.house_hash;
                this.owner_id = res.data.owner_id;
                this.owner = res.data.owner;
                this.verify = res.data.verify;
                this.owner_name = res.data.owner_name;
                this.registerForm.state = res.data.state;
                this.provi = res.data.low_location.provi;
                this.city = res.data.low_location.city;
                this.sector =res.data.low_location.sector;
                this.commu_name = res.data.low_location.commu_name;
                this.specific_location = res.data.specific_location;
                this.floor = res.data.floor;
                this.registerForm.elevator = res.data.elevator;
                if (this.elevator==true){
                    this.elevator_text="有电梯"
                } else {
                    console.log(this.elevator)
                    this.elevator_text="没有"
                }
                this.registerForm.lease = res.data.lease;
                this.house_type = res.data.house_type;
                this.house_owner_credit = res.data.house_owner_credit;



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

            },
        }
    }
</script>

<style scoped lang="scss">
    .Myhouse{
        width: 100%;
        height: 100px;
    }
    .bk{
        width:100%;
        height:700px;
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
        width:450px;
        float: left;
        margin-left:10px;
    }
    .h-info{
        font-size: 25px;
        float: left;
        margin-left: 30px;
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
</style>