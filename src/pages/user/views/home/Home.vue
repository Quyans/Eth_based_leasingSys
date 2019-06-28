<template>
    <div id="home">
        <div class="home_2"  >
            <div   class="sub_home" :style="sub_note" style="">
                <MyTitle></MyTitle>
                <searchCondition></searchCondition>
                <el-divider style="background-color: black" content-position="left"></el-divider>
                <el-row>
                    <el-col :span="8"><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>
                    <el-col :span="8"><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>
                    <el-col :span="8"><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>
                </el-row>
            </div>

        </div>
    </div>
</template>

<script>

    import Icon from "@/components/Icon";
    import MyTitle from "./components/MyTitle"
    import loginForm from "./components/loginForm"
    import RegisterForm from "./components/RegisterForm"
    import searchCondition from "./components/searchCondition"
    import RoughHouse from "./components/RoughHouse"
    export default {
        name: 'home',
        components: {
            Icon,
            MyTitle,
            loginForm,
            RegisterForm,
            searchCondition,
            RoughHouse
        },
        created() {
        },
        data() {
            return {
                BASE_URL: process.env.BASE_URL,
                searchId: '',
                isScanningQRCode: false,

                sub_note:{
                    backgroundImage: "url(" + require("../../../../image/User/bk2.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                },
                computed_rough_Info:{
                    "photo":"sadfadsfadf",   //一张图片的hash
                    "low_str_location":"山东省济南市历下区**小区",
                    "lease":"5000",
                    "house_type":"2",
                    "lease_type":"1",
                }


            }
        },
        methods: {

        //

        }
    }
</script>
<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        width: 100%;
        height: 100%;
    }

</style>
<style>
    #home{
        background-image: url("../../../../image/User/bk1.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 3vh;
    }

    #home .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        /*position: relative;*/
        overflow: hidden;
    }
    #home  .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    #home .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    #home .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
<style lang="scss" scoped>
    .home {
        section.main {
            padding: 0 1em;
        }
        height: 100%;
        width: 100%;
        position: absolute;
        /*.icon_scan {*/
            /*width: 14px;*/
            /*height: 14px;*/
            /*vertical-align: bottom;*/
        /*}*/
    }
    .sub_home{
        /*position: relative;*/
        margin: 0 auto;
        top: 40px;
        box-shadow:5px 5px 30px darkgrey;
        /*min-height: 400px;*/
        width: 80%;
    }
</style>
<style lang="scss">
    .el-dialog {
        width: 100% !important;
        max-width: 450px;
    }
    #app {
        height: 100%;
    }
</style>