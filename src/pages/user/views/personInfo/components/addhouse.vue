<template>
    <div>
        <div class="addhouse" :style="note">
            <div class="button_group">
                添加房子
            </div>
        </div>
        <div class="bk":style="note2">
            <div class="fir">
                <div class="phone">
                    <div class="h-info">
                        房产证:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.house_id"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info" style="margin-left: 35px">
                        房子可用:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.state"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info"style="margin-left: 55px">
                        省份:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.low_location"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        具体地址:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.specific_location"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        楼层:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.floor"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        有无电梯:
                        <el-input
                                placeholder="请输入内容"
                                v-model="registerForm.elevator"
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
                        出租方式:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.lease_type"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        房型:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.house_type"
                            v-bind:disabled="showinput">
                    </el-input>
                    </div>
                    <div class="h-info">
                        经度:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.lon"
                            v-bind:disabled="showinput">
                            </el-input>
                    </div>
                    <div class="h-info"style="margin-left: 90px">
                    纬度:<el-input
                        placeholder="请输入内容"
                        v-model="registerForm.lat"
                        v-bind:disabled="showinput">
                         </el-input>
                    </div>
                    <div class="h-info">
                    面积:<el-input
                        placeholder="请输入内容"
                        v-model="registerForm.area"
                        v-bind:disabled="showinput">
                         </el-input>
                     </div>
                    <div class="h-info">
                        上传图片{{registerForm.house_pic}}
                        <el-upload
                                action=""
                                list-type="picture-card"
                                :on-change="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </div>
                    <div>
                        <el-button style="margin-left:600px;margin-top: 50px" plain @click="Enter1">修改</el-button>
                        <el-button style="margin-left:100px" plain @click="Enter2">确认</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {addHouse} from "../../../../../resource/house";
    export default {
        components: {},
        data() {

            return {

                registerForm:{
                    house_id:0,
                    state:0,
                    low_location:"",
                    specific_location:"",
                    floor:0,
                    elevator:"",
                    lease:0,
                    lease_type:0,
                    house_type:0,
                    lon:"",
                    lat:"",
                    area:"",
                    house_pic:false,
                },
                showinput:true,
                shouphone:false,
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
                    img.src = URL.createObjectURL(formData.get('house_pic'));
                    img.onload = () => {
                        compressImage(img).then(file => {
                            formData.append('house_pic',file);
                            resolve(formData)
                        })
                    }
                }).then(formData => addHouse(formData))
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
                this.registerForm.house_pic = file.raw;
            },
            },

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