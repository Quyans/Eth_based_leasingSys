<template>
    <div id="houseHome">

        <div   class="sub_home"  style="">

            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>

            <div style="text-align: center">
                <div class="sub_title">
                    <span>房屋信息</span>
                </div>
                <p>{{lease}}元/月</p>
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
        <div style="width: 100px;height: 100px;background-color: black">

        </div>



    </div>
</template>
<script>
    import ShowPosition from "../../../../components/ShowPosition"
    export default {
        name: "SpecificInfo",
        components: {
            ShowPosition
        },
        data(){
            return{
                lease:500
            }
        },
        methods:{

        }
    }
</script>

<style >

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(n) {
        background-color: #99a9bf;
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
</style>
