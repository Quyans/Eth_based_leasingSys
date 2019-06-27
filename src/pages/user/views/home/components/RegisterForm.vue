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
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>

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
                <el-button @click="" style="width: 100%;margin: 20px 0;background-color: #7140b6;color: #ffffed;font-size: 20px;
                                            font-weight: 300">
                    注   册
                </el-button>
            </div>
        </div>
    </el-dialog>
</template>

<script>



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
                    phone:'',
                    id:'',
                    gender:'',
                    checked:false
                },
                formLabelWidth:'80px',
                imageUrl:''
            }
        },
        methods: {
            closeRegister(){
                this.$emit("closeRegisterForm", false)
                //子组件发射自定义事件sendiptVal 并携带要传递给父组件的值，
                // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue, this.mesFather);
            },
            gologin(){
                this.$emit("goLogin", true)
                //子组件发射自定义事件sendiptVal 并携带要传递给父组件的值，
                // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
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
            }

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
</style>