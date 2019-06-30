<template>
    <div id="houseHome">
        <div   class="sub_home"  style="">
            <h2>房子名称</h2>
            <el-carousel :autoplay="false"  type="card" height="200px">
                <el-carousel-item v-for="item in speciInfo.house_pic" >
                    <!--<h3 class="medium">{{ item }}</h3>-->
                    <div class="opacityBlack">
                        <img class="rollPhoto"  :src="item">
                    </div>
                </el-carousel-item>
            </el-carousel>

            <div style="text-align: center">
                <div class="sub_title">
                    <span>房屋信息</span>
                </div>
                <p>{{speciInfo.lease}}元/月</p>
                <el-row>
                    <el-col :span="8">户型{{}}</el-col>
                    <el-col :span="8">装修{{}}</el-col>
                    <el-col :span="8">WIFI</el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">面积：18平方米</el-col>
                    <el-col :span="8">朝向：南</el-col>
                    <el-col :span="8">电梯：有</el-col>
                </el-row>

                <el-row>
                    <el-col :span="8">楼层：3</el-col>
                    <el-col :span="8">类型：普通住宅</el-col>
                    <el-col :span="8">合租</el-col>
                </el-row>
            </div>
            <ShowPosition :long="116.399" :lat="39.910"></ShowPosition>
        </div>
        <div id="rightDiv" style="">
            <div>
                <p>孙XX</p>
                <div>
                    <p>信誉等级</p>
                    <p>电话：{{phone}}</p>
                </div>
                <el-button @click="contact">查看联系电话</el-button>
            </div>

            <div style="width: 100%;position: relative;top: 50vh">
                <el-button @click="submitPro">申请入住</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    import ShowPosition from "../../../../components/ShowPosition"
    import {contactOwner,userSet} from "../../../../resource/user"
    import {getSpeInfo} from "../../../../resource/house"
    export default {
        name: "SpecificInfo",
        components: {
            ShowPosition
        },
        data(){
            return{
                speciInfo:{
                    lease:'',
                    house_pic: [
                        //     {key:'1',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918490&di=93de199997bd27876fb3e72842da2551&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa403a1d2880ef70d311b0626f356f0682b8d77da524b-TAk0MZ_fw658'},
                        //     {key:'2',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918489&di=5f7f910721b2c154270f1cdeca71dc67&imgtype=0&src=http%3A%2F%2Fpic8.nipic.com%2F20100713%2F1954049_091647155567_2.jpg'},
                        //     {key:'3',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561902918489&di=08e89404ddf20c958c789cbd02a37282&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F67c0b0d20ca69f5a0a0167ab6526dcd2b6a1a3f046e3-l9OP6q_fw658'}
                    ],
                    house_hash:'sdfsdfadf',
                    owner_id:'',
                    verify:'',
                    owner:'',
                    owner_name:'',
                    role:'',
                    state:'',
                    low_location:'',
                    specific_location:'',
                    floor:0,
                    elevator:false,
                    house_type:"",
                    house_owner_credit:0,
                    house_comment:[]
                },

                phone_state:false,
                phone:'',
                phoneValid:''
            }
        },
        created(){

            getSpeInfo('123').then(res=>{
                this.speciInfo = res.data
            }),

            contactOwner('123').then(res=>{
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
            }

        }
    }
</script>

<style >


    .opacityBlack{
        width: 100%;
        height: 100%;
        background-color: #7e4380;
    }
    .el-carousel__item:nth-child(n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(n) img {
        opacity: 0.4;
    }
    .is-active:nth-child(n) img{
        opacity: 1;
    }
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
        background-color: #48385c;
        /*height: 100%;*/
    }
    .sub_title{
        margin: 0 auto;
        width: 100px;
    }
</style>
<style lang="scss" scoped>

    .sub_home{

        margin-left: 10%;
        top: 40px;
        box-shadow:5px 5px 30px darkgrey;
        /*min-height: 400px;*/
        width: 65%;
        /*height: 900px;*/
        background-color: white;
        display: inline-block;
    }

    #rightDiv{
        width: 10%;
        height: 600px;
        background-color: #dba4a4;
        /* float: right; */
        position: absolute;
        top: 0;
        right: 10%;
    }
    .rollPhoto{
        width: 100%;
        height: 100%;
    }
</style>
<style>

</style>
