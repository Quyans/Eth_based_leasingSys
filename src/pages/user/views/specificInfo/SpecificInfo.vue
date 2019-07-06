<template>
    <div id="houseHome">
        <div style="padding-top: 40px;text-align: center">
            <div   class="sub_home"  style="">
                <div style="width: 100%;background-color: #7140b6;border-radius: 10px 0 0 0">
                    <div style="padding: 10px">
                        <h3 style="color: #f1edfc; display: inline-block">{{speciInfo.low_location.commu_name}}</h3>
                        <a href="user.html"><h3 style="display: inline-block;float: right;color: #fafcf7">返回</h3></a>
                    </div>
                </div>

                <!--<div style="height: 300px">-->
                    <!--<el-carousel :autoplay="false"  type="card" >-->
                        <!--<el-carousel-item v-for="item in speciInfo.house_pic" >-->
                            <!--&lt;!&ndash;<h3 class="medium">{{ item }}</h3>&ndash;&gt;-->
                            <!--<div class="opacityBlack">-->
                                <!--<img class="rollPhoto"  :src="item">-->
                            <!--</div>-->
                        <!--</el-carousel-item>-->
                    <!--</el-carousel>-->
                <!--</div>-->

                <div style="padding-top: 20px;width: 95%;margin: 0 auto">
                    <div style="width: 50%; ; display: inline-block;vertical-align: top">
                        <el-carousel :autoplay="false" indicator-position="outside">
                            <el-carousel-item v-for="item in speciInfo.house_pic" >
                                <div class="opacityBlack">
                                    <img class="rollPhoto"  :src="item">
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div style="width: 50%;display: inline-block;">
                        <div style="width: 80%;margin: 0 auto">
                            <div class="subLabel"  style="background-color: #805688;font-size: 20px;color: #fff2ff;">
                                房屋信息
                            </div>
                            <div class="textHouse">
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <p>户型{{speciInfo.house_type}}</p>
                                        <p>面积：{{speciInfo.area}}</p>
                                        <p>楼层：3</p>
                                        <p>类型：普通住宅</p>
                                    </el-col>
                                    <el-col :span="12">
                                        <p>{{speciInfo.lease}}元/月</p>
                                        <p>WIFI</p>
                                        <p>
                                            电梯:有
                                        </p>
                                        <p>合租</p>
                                    </el-col>
                                </el-row>
                            </div>

                            <div class="subLabel"  style="background-color: #ffd068;color: #fffaf8;margin-top: 30px">
                                房屋地址</div>
                            <div class="textHouse">
                                <p>
                                    {{speciInfo.low_str_location}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style=";padding-top: 5%">
                    <div class="subLabel"  style="vertical-align: top;background-color:#ffffff;
                    font-size: 20px;color: #7245ae;display: inline-block; float: left;margin-left: 10% ">
                        房屋信息
                    </div>
                    <ShowPosition style="margin: 0 auto" :long="116.399" :lat="39.910"></ShowPosition>
                </div>
            </div>
            <div id="rightDiv" >
                <div id="idCard">
                    <div style="text-align: center; padding-bottom: 10px">
                        <i  style="font-size: 40px" class="el-icon-user-solid"></i>
                        <p>{{speciInfo.owner_name}}</p>
                    </div>
                    <div style="padding: 2px 10px">
                        <p>信誉等级:{{speciInfo.house_owner_credit}}</p>
                        <p>电话：{{phone}}</p>
                        <el-button type="text" @click="contact">查看联系电话</el-button>
                    </div>
                </div>

                <div style="width: 100%;position: relative;top: 50vh">
                    <el-button @click="submitPro()">申请入住</el-button>
                </div>
            </div>
        </div>


        <!--<div style="display: inline-block;width: 50%;height: 300px;background-color: black"></div>-->
        <!--<div style="display: inline-block;width: 10%;height: 30px;background-color: white;vertical-align: top;"></div>-->

    </div>
</template>
<script>
    import ShowPosition from "../../../../components/ShowPosition"
    // import wheel from "./components/wheel"
    import {contactOwner,userSet} from "../../../../resource/user"
    import {getSpeInfo} from "../../../../resource/house"

    export default {
        name: "SpecificInfo",
        components: {
            ShowPosition,
        },
        props: {
            house_hash: {
                required: true,
                type: String
            }
        },
        data(){
            var that = this
            return{
                speciInfo:{
                    lease:'',
                    house_pic: [
                        //     {key:'1',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918490&di=93de199997bd27876fb3e72842da2551&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa403a1d2880ef70d311b0626f356f0682b8d77da524b-TAk0MZ_fw658'},
                        //     {key:'2',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918489&di=5f7f910721b2c154270f1cdeca71dc67&imgtype=0&src=http%3A%2F%2Fpic8.nipic.com%2F20100713%2F1954049_091647155567_2.jpg'},
                        //     {key:'3',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918489&di=08e89404ddf20c958c789cbd02a37282&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F67c0b0d20ca69f5a0a0167ab6526dcd2b6a1a3f046e3-l9OP6q_fw658'}
                    ],
                    owner_id:'',
                    verify:'',
                    owner:'',
                    owner_name:'',
                    role:'',
                    state:'',
                    low_location:{
                        provi:"山东省",
                        city:"济南市",
                        sector:"历下区",
                        commu_name:"奥龙官邸",
                    },
                    low_str_location:'',
                    specific_location:'',
                    floor:0,
                    elevator:false,
                    house_type:"",
                    house_owner_credit:0,
                    house_comment:[],
                    area:0,
                },

                phone_state:false,
                phone:'',
                phoneValid:'',
                testhash : 'lEj/IW4OvMJgYQbg3BynVA==',
            }
        },
        created(){

            getSpeInfo(this.testhash).then(res=>{
                this.speciInfo = res
            }),

            contactOwner(this.speciInfo.owner_id).then(res=>{
                this.phoneValid = res.data.phone
                this.phone=this.phoneValid.substr(0, 3) + '****' + this.phoneValid.substr(7);
            })
        },
        methods:{
            contact(){
                this.phone = this.phoneValid
            },
            submitPro(){
                userSet(this.speciInfo.house_hash,this.speciInfo.owner_id).then(res=>{
                    this.$message({
                        message: "请求成功",
                        type: "success",
                        center: true
                    })
                })
                // userSet(this.speciInfo.house_hash,this.speciInfo.owner_id)
            }

        }
    }
</script>

<style >


    .opacityBlack{
        width: 100%;
        height: 100%;
        /*background-color: #7e4380;*/
    }
    /*.el-carousel__item:nth-child(n) {*/
        /*background-color: #99a9bf;*/
    /*}*/

    /*.el-carousel__item:nth-child(n) img {*/
        /*opacity: 0.4;*/
    /*}*/
    /*.is-active:nth-child(n) img{*/
        /*opacity: 1;*/
    /*}*/
    /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
    /*}*/
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
    #houseHome{
        /*background-color: #48385c;*/
        /*height: 100%;*/
        background-image: url("../../../../image/User/bk1.png");
        background-repeat: no-repeat;
        min-height: 100%;
        background-size: cover;
    }
    .sub_title{
        margin: 0 auto;
        width: 100px;
        color: #7c48c4;
        padding: 30px 0;
    }
    #idCard{
        /* border: white 1px solid; */
        height: 200px;
        background-color: #7140b6;
        border-radius: 0 10px 10px 0;
        box-shadow: 5px 5px 30px darkgrey;
        color: #fbe9ff;
    }
</style>
<style lang="scss" scoped>

    .sub_home{
        text-align: left;
        /*margin-left: 10%;*/
        /*margin-top: 40px;*/
        box-shadow:5px 5px 30px darkgrey;
        /*min-height: 400px;*/
        width: 65%;
        /*height: 900px;*/
        background-color: white;
        display: inline-block;
    }

    #rightDiv{
        width: 130px;
        height: 600px;
        /*background-color: #dba4a4;*/
        /* float: right; */

        right: 10%;
        /*color: #d0c6c6;*/
        vertical-align: top;
        display: inline-block;
    }
    .rollPhoto{
        width: 100%;
        height: 100%;
    }
    .subTitleRow{
        width: 60%;
        margin: 0 auto;
        padding: 5px 0;

    }
    .sub_home{
        background-image: url("../../../../image/User/bk2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        /*padding-top: 3vh;*/
        min-height: 100%;
        border-radius: 5px 0 10px 10px;
    }
    .subLabel{
        width: 100px;
        text-align: center;
        padding: 7px 2px;
        border-radius: 5px;
        font-size: 20px;
        letter-spacing: 2px;
    }
    .textHouse{
        padding-top: 20px;
    }
</style>
<style>
    #test{
        width: 300px !important;
    }
</style>
