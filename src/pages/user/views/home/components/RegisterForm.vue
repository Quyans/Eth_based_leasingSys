<template>
    <el-dialog id="registerForm" :visible="visual" @close="closeRegister" >
        <div style="width: 85%; margin:0 auto">
            <p ><span style="font-size: 25px">注册</span>
                <span style="float: right; padding: 10px 0 0 0;">已有账号？
                    <a style="color: #6e3eb4;" @click="gologin" >去登陆</a></span>
            </p>
            <el-form ref="registerForm" :model="registerForm" >
                <el-form-item >
                    <el-input v-model="registerForm.username" placeholder="请输入账户名称" ></el-input>
                </el-form-item>
                <el-form-item >
                    <el-input v-model="registerForm.name" placeholder="请输入姓名" ></el-input>
                </el-form-item>

                <el-form-item >
                    <el-input v-model="registerForm.id" placeholder="请输入身份证号码" ></el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-upload
                            class="avatar-uploader"
                            action=""
                            :show-file-list="false"
                            :on-change="getFile_a"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl_a" :src="imageUrl_a" class="avatar">
                        <p>身份证照片面</p>

                    </el-upload>

                    <el-upload
                            class="avatar-uploader"
                            action=""
                            :show-file-list="false"
                            :on-change="getFile_b"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl_b" :src="imageUrl_b" class="avatar">
                        <p style="">身份证国徽面</p>
                        <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                    </el-upload>
                </el-form-item>
                <el-form-item prop="profile_b">

                </el-form-item>

                <el-form-item >
                    <el-input v-model="registerForm.phone" placeholder="请输入电话号码" ></el-input>
                </el-form-item>

                <el-form-item >
                    <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" ></el-input>
                </el-form-item>

                <el-form-item >
                    <el-input v-model="registerForm.pay_password" type="password" placeholder="请输入支付密码" ></el-input>
                </el-form-item>
                <p style="color: #6e3eb4">该密码不可修改，请妥善保管</p>
                <el-form-item id="gender_item" >
                    <div style="  color: darkgrey;    border-radius: 4px;  padding: 0 15px;">
                        <span>性别</span>
                        <div style="text-align: right; display: inline-block;float: right;">
                            <el-radio-group v-model="radio1" size="mini">
                                <el-radio-button label="0">女</el-radio-button>
                                <el-radio-button label="1">男</el-radio-button>
                            </el-radio-group>
                        </div>

                    </div>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="registerForm.checked">
                        我已阅读并同意
                    </el-checkbox>
                    <a style="color: #6e3eb4; ">《网站使用协议》</a>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="submit_reg" style="width: 100%;margin: 20px 0;background-color: #7140b6;color: #ffffed;font-size: 20px;
                                            font-weight: 300">
                    注   册
                </el-button>
            </div>
        </div>
    </el-dialog>
</template>

<script>


    import {compressImage} from "../../../../../utils";
    import {register} from   "../../../../../resource/authorization"
    export default {

        name: 'RegisterForm',



        mounted() {

        },
        props:[
            'visual'
        ],
        watch:{
            // visual:function (val) {
            //     if (val == true){
            //         this.loginForm_vis = true
            //     }
            // }

        },
        data() {

            return {

                radio1:1,
                registerForm: {
                    username: '',
                    password: '',
                    pay_password:'',
                    name:'',
                    profile_a:false,
                    profile_b:false,
                    phone:'',
                    id:'',
                    gender:'',
                    checked:false
                },
                formLabelWidth:'80px',
                imageUrl_a:'',
                imageUrl_b:''
            }
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
        methods: {
            closeRegister(){
                this.$emit("closeRegisterForm", false)
                //子组件发射自定义事件sendiptVal 并携带要传递给父组件的值，
                // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue, this.mesFather);
            },
            gologin(){
                console.log(123)
                this.$emit("goLogin", true)
                //子组件发射自定义事件sendiptVal 并携带要传递给父组件的值，
                // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue
            },

            //修改图片一 二
            getFile_a(file,file_list){
                // console.log(123)
                this.registerForm.profile_a = file.raw
                this.imageUrl_a = URL.createObjectURL(file.raw);
            },
            getFile_b(file,file_list){
                // console.log(file.raw)
                this.registerForm.profile_b = file.raw;
                this.imageUrl_b = URL.createObjectURL(file.raw);
            },
            submit_reg(){
                var that = this
                new Promise(resolve => {
                    // 图片压缩
                    let formData = this.ruleFormData
                    let img = new Image()
                    img.src = URL.createObjectURL(formData.get('profile_a'))
                    img.onload = () => {
                        compressImage(img).then(file => {
                            formData.append('profile_a',file)
                            resolve(formData)
                        })
                    }
                    img.src = URL.createObjectURL(formData.get('profile_b'))
                    img.onload = () => {
                        compressImage(img).then(file => {
                            formData.append('profile_b',file)
                            resolve(formData)
                        })
                    }
                }).then(formData => register(formData))
                    .then(() => {
                            this.$message({
                                message: '注册成功  正在跳转',
                                type: 'success'
                            });
                            // 2s后跳转到登录页面
                            setTimeout(() => {
                                // this.$router.push('/login')
                                that.gologin()
                            }, 2000)
                        },
                        e => {
                            this.$message.error(`出错：${e.message}`);
                        })
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleAvatarSuccess() {
                // this.imageUrl = URL.createObjectURL(file.raw);
                console.log(123)
            },
        }
    }


</script>


<style scoped lang="scss">

    .displayNone {
        display: none;
    }

    .show {
        display: block;
    }


</style>
<style lang="scss">
    #registerForm .el-form-item{
        margin-top: 22px;
        margin-bottom: 0;
    }
    #registerForm .el-input__inner{
        border: 1px solid #8268c3;
    }
    #registerForm .el-dialog{
        background-image: url("../../../../../image/User/loginBk.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
    #gender_item .el-form-item__content{
         border: 1px solid #8268c3;
        border-radius: 4px;
         background-color: white;
    }
    #registerForm .el-dialog{
        width: 500px;
    }
    #registerForm .avatar{
        width: 100%;
        height: 100%;
    }
    #registerForm .avatar-uploader{
        width: 44%;
        display: inline-block;
        margin: 0 10px;
    }
    #registerForm .el-upload {
        width: 100%;
        height: 120px;
    }

</style>