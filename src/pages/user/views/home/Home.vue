<template>
    <div id="home">
        <div class="home_2"  >
            <div   class="sub_home" :style="sub_note" style="">
                <MyTitle></MyTitle>
                <searchCondition></searchCondition>
                <el-divider style="background-color: black" content-position="left"></el-divider>
                <!--<el-row v-for="item in computed_rough_Info.length">-->
                    <!--<el-col :span="8" ><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>-->
                    <!--<el-col :span="8"><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>-->
                    <!--<el-col :span="8"><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>-->
                <!--</el-row>-->
                <div style="width: 100%; text-align: center">
                    <div v-for="item in computed_rough_Info " style="width: 30%;display: inline-block;margin: 20px 0" >
                        <RoughHouse  style="margin: 0 auto" :styNum="item.styNum" :roughInfo="item"></RoughHouse>
                    </div>
                </div>
                <div id="home_footer"></div>
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
    import {searchLowHouse} from "../../../../resource/house"
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
            searchLowHouse(1,1,1,1,1).then(res =>{
                // console.log(res)
                var temp = res;
                var len = temp.length
                for (var i = 0;i<len;i++){
                    temp[i].styNum = i
                }
                this.computed_rough_Info = temp
                console.log(temp)
            })
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
                computed_rough_Info:[
                    {"photo":"",   //一张图片的hash
                        "low_str_location":"**小区",
                        "lease":"",
                        "house_type":"",
                        "lease_type":"1",
                        "house_hash":""},
                    {
                        "photo":"",   //一张图片的hash
                        "low_str_location":"**小区",
                        "lease":"",
                        "house_type":"",
                        "lease_type":"",
                        "house_hash":""
                    },
                    {
                        "photo":"",   //一张图片的hash
                        "low_str_location":"**小区",
                        "lease":"",
                        "house_type":"",
                        "lease_type":"",
                        "house_hash":""
                    },{
                        "photo":"",   //一张图片的hash
                        "low_str_location":"**小区",
                        "lease":"",
                        "house_type":"",
                        "lease_type":"",
                        "house_hash":""
                    },{
                        "photo":"",   //一张图片的hash
                        "low_str_location":"",
                        "lease":"",
                        "house_type":"",
                        "lease_type":"",
                        "house_hash":""
                    },
                    {
                        "photo":"",   //一张图片的hash
                        "low_str_location":"",
                        "lease":"",
                        "house_type":"",
                        "lease_type":"",
                        "house_hash":""
                    },
                ]
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
<style scoped>
    #home{
        background-image: url("../../../../image/User/bk1.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 3vh;
        min-height: 100%;
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
    }
    .sub_home{

        margin: 0 auto;
        /*top: 40px;*/
        box-shadow:5px 5px 30px darkgrey;
        width: 80%;
    }
</style>
<style lang="scss" scoped>
    .el-dialog {
        width: 100% !important;
        max-width: 450px;
    }
    #home_footer{
        width: 60%;
        height: 300px;
        background-image: url("../../../../image/User/bk_footer.png");
        background-size: 100% 100%;
        margin: 0 auto;
    }

</style>