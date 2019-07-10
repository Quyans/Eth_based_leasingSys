<template>
    <div>
        <div class="bk":style="note2">
            <div class="button_group">
                我的交易
            </div>
            <HR align=center width=1210px color=#7848ba SIZE=2></HR>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="time"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="gas"
                        label="花费"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="low_location.provi"
                        label="省"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="low_location.city"
                        label="市"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="low_location.sector"
                        label="区"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="low_location.commu_name"
                        label="小区"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="specific_location"
                        label="详细地址"
                        width="250">
                </el-table-column>
                <el-table-column
                        label="评价">
                    <el-button type="text" @click="dialogVisible=true">点击评论</el-button>
                </el-table-column>
            </el-table>
            <el-dialog
                    title="评价"
                    :visible.sync="dialogVisible"
                    width="50%">
                <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请输入内容"
                        v-model="registerForm.textarea">
                </el-input>
                上传图片：
                <el-upload
                        action=""
                        list-type="picture-card"
                        :on-change="handleRemove">
                    <img v-if="imageUrl_a" :src="imageUrl_a"class="avatar">
                </el-upload>
                <span slot="footer" class="dialog-footer">
                         <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="commit">确 定</el-button>
                        </span>
            </el-dialog>

        </div>
    </div>
</template>

<script>

    import {getTransRecord} from "../../../../../resource/user";
    import {compressImage} from "../../../../../utils";
    export default {
        name: "Mybus",
        components: {},


        data() {
            return {
                dialogVisible: false,
                imageUrl_a:"",
                registerForm:{
                    textarea:"",
                    picture:false,
                },
                tableData:[{

                }],
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },

            }
        },
        created(){
            getTransRecord().then(res => {
                this.tableData = res.data.record
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
       commit(){
           this.dialogVisible = false;
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
           }).then(formData => evaluateHouse(formData))
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
</style>