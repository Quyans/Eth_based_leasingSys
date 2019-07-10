<template>

        <el-dialog id="loginForm"  :visible="visual" @close="closeLogin" >
            <div style="width: 85%; margin:0 auto">
                <p style=" margin-bottom: 20px"><span style="font-size: 25px;" >账号登录</span>
                </p>
                <el-form ref="loginForm" :model="loginForm" >
                    <el-form-item >
                        <el-input v-model="loginForm.username" placeholder="请输入账户名称" ></el-input>
                    </el-form-item>

                    <el-form-item  >
                        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" ></el-input>
                    </el-form-item>
                    <p style=" margin-bottom: 20px">
                        <span style="float: right; padding: 10px 0 0 0;">没有账号？
                    <a style="color: #6e3eb4;" @click="goregister" >去注册</a></span>
                    </p>
                    <!--<p  style="text-align: right;color: #6e3eb4;-->
                        <!--padding: 0 0 5px 0px;">忘记密码?</p>-->
                </el-form>

                <div slot="footer" class="dialog-footer">
                    <el-button @click="submit" style="width: 100%;margin: 20px 0;background-color: #7140b6;color: #ffffed;font-size: 20px;
                                            font-weight: 300">
                        登    录
                    </el-button>
                </div>
            </div>
        </el-dialog>




</template>

<script>


    import {login} from   "../../../../../resource/authorization"
    export default {

        name: 'loginForm',

        // created() {
        //     if (visual==true){
        //         this.loginForm_vis = true
        //     }
        // },

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
                loginForm_vis:false,
                loginForm: {
                    username: '',
                    password: '',
                },
                formLabelWidth:'80px',

            }
        },
        methods: {
            closeLogin(){
                this.$emit("closeLoginForm", false)
                //子组件发射自定义事件sendiptVal 并携带要传递给父组件的值，
                // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue, this.mesFather);
            },
            goregister(){
                this.$emit("goRegister", false)
                //子组件发射自定义事件sendiptVal 并携带要传递给父组件的值，
                // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue
            },

            submit(){
                login(this.loginForm.username,this.loginForm.password).then(() => {
                    this.$message({
                        message: "修改成功",
                        type: "success",
                        center: true
                    })
                    this.closeLogin()
                })
            }

        }
    }
</script>

<style lang="scss">

    #loginForm .el-dialog{
        background-image: url("../../../../../image/User/loginBk.jpg");
        background-size: 100%;
    }
    #loginForm .el-input__inner{
        border: 1px solid #8268c3;
    }
    #loginForm .el-dialog__header{
        width: 75%;
        margin: 0 auto;
        font-weight: 200;
    }
    #loginForm .el-dialog{
        width: 400px;
    }
</style>