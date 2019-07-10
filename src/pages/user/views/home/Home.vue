<template>
    <div id="home">
        <div class="home_2"  >
            <div   class="sub_home" :style="sub_note" style="">
                <MyTitle></MyTitle>
                <searchCondition @searchCon="searchCond"></searchCondition>
                <el-divider style="background-color: black" content-position="left"></el-divider>
                <!--<el-row v-for="item in computed_rough_Info.length">-->
                    <!--<el-col :span="8" ><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>-->
                    <!--<el-col :span="8"><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>-->
                    <!--<el-col :span="8"><RoughHouse :roughInfo="computed_rough_Info"></RoughHouse></el-col>-->
                <!--</el-row>-->
                <div style="width: 100%; text-align: center;padding-top: 50px">
                    <div v-for="item in computed_rough_Info " style="width: 30%;display: inline-block;margin: 20px 0" >
                        <RoughHouse @goSpec="gospec" style="margin: 0 auto" :styNum="item.styNum" :roughInfo="item"></RoughHouse>
                    </div>
                    <!--<div class="block" v-if="computed_rough_Info.length!=0">-->
                    <div class="block" v-if="true">
                        <el-pagination
                                :hide-on-single-page="true "
                                layout="prev, pager, next"
                                :total="50"

                                @current-change="currentChange"
                        >
                        </el-pagination>
                    </div>
                </div>
                <div id="home_footer"></div>
                <!--请选取一个图像文件: <input type="file" id="file" name="file"/>-->
                <!--<div id="result"></div>-->
            </div>
        </div>
        <SpecificInfo v-if="specShow" :house_hash="house_id_hash_prop"></SpecificInfo>
    </div>
</template>

<script>

    import Icon from "@/components/Icon";
    import MyTitle from "./components/MyTitle"
    import loginForm from "./components/loginForm"
    import RegisterForm from "./components/RegisterForm"
    import searchCondition from "./components/searchCondition"
    import RoughHouse from "./components/RoughHouse"
    import SpecificInfo from "./components/SpecificInfo"
    import {searchLowHouse} from "../../../../resource/house"
    import {calRoughUrl} from "../../../../resource/ipfs"
    export default {
        name: 'home',
        components: {
            Icon,
            MyTitle,
            loginForm,
            RegisterForm,
            searchCondition,
            RoughHouse,
            SpecificInfo
        },
        created() {
            // searchLowHouse(1,1,1,1,1).then(res =>{
            //     // console.log(res)
            //     var temp = res;
            //     var len = temp.length
            //     for (var i = 0;i<len;i++){
            //         temp[i].styNum = i
            //     }
            //     this.computed_rough_Info = temp
            //     console.log(temp)
            // })

            // window.addEventListener("DOMContentLoaded", that.contentLoaded, false);
        },
        data() {
            return {
                house_id_hash_prop:"",
                specShow:false,
                BASE_URL: process.env.BASE_URL,
                searchId: '',
                isScanningQRCode: false,
                page:0,
                sub_note:{
                    backgroundImage: "url(" + require("../../../../image/User/bk2.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                },
                computed_rough_Info:[
                    // {"photo":"",   //一张图片的hash
                    //     "low_str_location":"**小区",
                    //     "lease":"",
                    //     "house_type":"",
                    //     "lease_type":"1",
                    //     "house_hash":""},
                    // {
                    //     "photo":"",   //一张图片的hash
                    //     "low_str_location":"**小区",
                    //     "lease":"",
                    //     "house_type":"",
                    //     "lease_type":"",
                    //     "house_hash":""
                    // },
                    // {
                    //     "photo":"",   //一张图片的hash
                    //     "low_str_location":"**小区",
                    //     "lease":"",
                    //     "house_type":"",
                    //     "lease_type":"",
                    //     "house_hash":""
                    // },{
                    //     "photo":"",   //一张图片的hash
                    //     "low_str_location":"**小区",
                    //     "lease":"",
                    //     "house_type":"",
                    //     "lease_type":"",
                    //     "house_hash":""
                    // },{
                    //     "photo":"",   //一张图片的hash
                    //     "low_str_location":"",
                    //     "lease":"",
                    //     "house_type":"",
                    //     "lease_type":"",
                    //     "house_hash":""
                    // },
                    // {
                    //     "photo":"",   //一张图片的hash
                    //     "low_str_location":"",
                    //     "lease":"",
                    //     "house_type":"",
                    //     "lease_type":"",
                    //     "house_hash":""
                    // },
                ],
                low_location:'',
                lease_select:'',
                type_select:'',
                lease_type:'',
                elevator:'',
            }
        },
        methods: {
            gospec(hash){
                this.house_id_hash_prop = hash
                this.specShow = true
            },
            searchCond(low_location,lease_select,type_select,lease_type,elevator){
                this.low_location=low_location;
                this.lease_select=lease_select;
                this.type_select=type_select;
                this.lease_type=lease_type;
                this.elevator=elevator;

                searchLowHouse(this.low_location,this.lease_select,this.type_select,this.lease_type,this.elevator,0).then(res => {
                        var temp = res.houseList;
                        this.page=res.page
                        var len = temp.length
                        for (var i = 0;i<len;i++){
                            temp[i].styNum = i
                        }
                        var temp2 = calRoughUrl(temp)
                        this.computed_rough_Info = temp2
                        // console.log(temp)
                        // this.$message({
                        //     message: "查询成功，请稍后",
                        //     type: "success",
                        //     center: true
                        // })
                    },
                    e => {
                        this.$message.error(`出错：${e.message}`);
                    })
                },
             ProcessFile(e) {
                var file = document.getElementById('file').files[0];
                console.log(file)
                if (file) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var txt = event.target.result;
                        // console.log(txt)
                        var img = document.createElement("img");
                        img.src = txt;//将图片base64字符串赋值给img的src
                        // console.log(txt);
                        document.getElementById("result").appendChild(img);
                    };
                }
                reader.readAsDataURL(file);
            },

             contentLoaded() {
                document.getElementById('file').addEventListener('change',
                    this.ProcessFile, false);
            },

            currentChange(currentPage){
                console.log(currentPage)
                this.page=currentPage-1
                searchLowHouse(this.low_location,this.lease_select,this.type_select,this.lease_type,this.elevator,this.page).then(res => {
                        var temp = res.houseList;
                        this.page=res.page
                        var len = temp.length
                        for (var i = 0;i<len;i++){
                            temp[i].styNum = i
                        }
                        var temp2 = calRoughUrl(temp)
                        this.computed_rough_Info = temp2
                    },
                    e => {
                        this.$message.error(`出错：${e.message}`);
                    })
                },


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
        /*font-family: ;*/
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
        margin-top: 70px;
    }

</style>