<template>
    <div>
        <div class="bk":style="note2">
            <div class="button_group">
                添加房子
            </div>
            <HR align=center width=1210px color=#7848ba SIZE=2></HR>
            <div class="fir">
                <div class="phone">
                    <el-row>
                        <el-col :span="6">
                    <div class="h-info">
                        房产证:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.house_id">
                    </el-input>
                    </div>
                    <div class="h-info">
                        房子可用:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.state">
                    </el-input>
                    </div>
                    <div class="h-info">
                        市区:  <el-select v-model="registerForm.sector" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    </div>
                            <div class="h-info1">
                                上传图片{{registerForm.house_pic}}
                                <el-upload
                                        class="h-info2"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        list-type="picture-card"
                                        :on-change="handleRemove">
                                </el-upload>
                            </div>
                        </el-col>
                        <el-col :span="6">
                    <div class="h-info">
                        具体地址:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.specific_location">
                    </el-input>
                    </div>
                    <div class="h-info">
                        楼层:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.floor">
                    </el-input>
                    </div>
                      <div class="h-info">
                          小区:<el-input
                           placeholder="请输入内容"
                           v-model="registerForm.commu_name"
                           v-on:change="reload">
                        </el-input>
                      </div>
                            <div class="h-info" v-if="show">
                                <Map @send="getvalue" style="height: 250px;margin-top: 20px" :name="registerForm.commu_name" :city="citys"></Map>
                            </div>
                        </el-col>
                        <el-col :span="6">
                    <div class="h-info">
                        价格:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.lease">
                    </el-input>
                    </div>
                    <div class="h-info">
                        出租方式:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.lease_type">
                    </el-input>
                    </div>
                    <div class="h-info">
                        房型:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.house_type">
                    </el-input>
                    </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="h-info">
                                有无电梯:
                                <el-input
                                        placeholder="请输入内容"
                                        v-model="registerForm.elevator">
                                </el-input>
                            </div>
                    <div class="h-info">
                        面积:<el-input
                            placeholder="请输入内容"
                            v-model="registerForm.area">
                    </el-input>
                    </div>
                            <div class="h-info">
                                配套设施:<el-input
                                    type="textarea"
                                    :rows="6"
                                    placeholder="请输入内容"
                                    v-model="registerForm.accessory">
                            </el-input>
                            </div>
                    <div class="h-info">
                        <el-button style="margin-top:50px;width: 150px;background-color: #6e3eb4;color: white" plain @click="Enter2">进行验证</el-button>
                    </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {compressImage} from "../../../../../utils";
    import {addHouse} from "../../../../../resource/house";
    import Map from  "../../../../../components/SetPositionBaidu";
    export default {
        components: {Map},
        data() {

            return {
                options: [{
                    value: '市中区',
                    label: '市中区'
                }, {
                    value: '历下区',
                    label: '历下区'
                }, {
                    value: '历城区',
                    label: '历城区'
                }, {
                    value: '天桥区',
                    label: '天桥区'
                }, {
                    value: '槐荫区',
                    label: '槐荫区'
                }, {
                    value: '长清区',
                    label: '长清区'
                }, ],
                citys:"济南市",
                show:true,
                registerForm:{
                    house_id:0,
                    state:0,

                    provi:"山东省",
                    city:"济南市",
                    sector:"",
                    commu_name:"",
                    specific_location:"",
                    floor:0,
                    elevator:"",
                    lease:0,
                    lease_type:0,
                    house_type:0,
                    lon:"178",
                    lat:"34",
                    area:"",
                    accessory:"",
                    house_pic:false,
                },
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
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
                console.log(formData)
                return formData
            }
        },

        methods:{
            reload(){
                this.show = false;
                this.$nextTick(() => (this.show = true))
        },
            getvalue(v){
            this.registerForm.lon = v.lng;
            this.registerForm.lat = v.lat;
            },
            Enter2(){
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
                this.registerForm.house_pic = file.raw;
            },
        },

    }
</script>

<style scoped lang="scss">

    .bk{
        width:100%;
        height: 600px;
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
        width: 200px;
        margin-left: 50px;
        margin-top: 15px;
    }
    .h-info1{
        float: left;
        width: 300px;
        margin-left: 50px;
        margin-top: 15px;
    }
    .h-info2{
        width: 300px;
    }
    .avatar{
        width: 100%;
        height: 100%;
    }


</style>
<style>
    .h-info1  .el-upload--picture-card{
        width: 120px;
        height: 120px;
    }
    .h-info1 .el-upload-list--picture-card .el-upload-list__item{
        width: 120px;
        height: 120px;
    }
</style>