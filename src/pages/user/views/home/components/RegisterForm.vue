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

                <el-form-item >
                    <el-input v-model="registerForm.phone" placeholder="请输入电话号码" ></el-input>
                </el-form-item>

                <el-form-item >
                    <el-input v-model="registerForm.password" placeholder="请输入密码" ></el-input>
                </el-form-item>

                <el-form-item >
                    <el-input v-model="registerForm.pay_password" placeholder="请输入支付密码" ></el-input>
                </el-form-item>
                <p style="color: #6e3eb4">该密码不可修改，请妥善保管</p>
                <el-form-item >
                    <el-input v-model="registerForm.gender" placeholder="性别" ></el-input>
                </el-form-item>
                <el-form-item >
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
</style>