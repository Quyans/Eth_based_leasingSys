<template>
    <div>
        <div class="my-title" :style="note">
            <div class="button_group" style="color: white">
                <i class="el-icon-user"></i>
                <el-button type="text" @click="loginBtn" style="color: #eadcff" >登录</el-button>
                <el-button type="text" @click="RegisterBtn" style="color: #eadcff">注册</el-button>
            </div>
            <router-link to="/person">个人中心</router-link>
        </div>
        <loginForm :visual="vis_login" @closeLoginForm="closeLoginform" @goRegister="goRegister"></loginForm>
        <RegisterForm :visual="vis_register" @closeRegisterForm="closeRegisterform"
                    @goLogin="goLogin"></RegisterForm>
    </div>

</template>

<script>
    import loginForm from "../components/loginForm";
    import RegisterForm from "../components/RegisterForm";
    export default {
        name: "MyTitle",
        components: {loginForm,RegisterForm},
        data() {
            return {
                note: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk3_withTitle.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    // height: '100%',
                    backgroundSize: '100% 100%',
                },
                vis_login:false,
                vis_register:false,
            }
        },
        methods:{
            loginBtn () {
                this.vis_login = true;
            },
            RegisterBtn(){
                this.vis_register = true;
            },
            closeLoginform(){
                this.vis_login = false;
            },
            closeRegisterform(){
                this.vis_register = false;
            },
            goLogin(){
                this.vis_register = false;
                this.vis_login = true;

            },
            goRegister(){
                this.vis_register = true;
                this.vis_login = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-title{
        width: 100%;
        height: 300px;
        
    }
    .button_group{
        color: white;
        width: 150px;
        padding-left: 50px;
        padding-top: 20px;
    }
</style>