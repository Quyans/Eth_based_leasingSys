<template>
    <div>
        <div class="Myhouse" :style="note">
            <div class="button_group">
                我的房子
            </div>
        </div>
        <div class="bk":style="note2">
         <div class="fir">
            <div class="phone">
                <el-carousel class="hourse" trigger="click" height="200px">
                    <el-carousel-item v-for="item in phonelist" :key="item.key">
                        <img :src="item.src">
                    </el-carousel-item>
                </el-carousel>
                <div class="h-info">
                    房产证:<span style="margin-left:50px">{{house_hash}}</span>
                </div>
                <div class="h-info">
                房主身份证:<span style="margin-left:50px">{{owner_id}}</span>
                 </div>
                <div class="h-info">
                    是否通过验证:<span style="margin-left:50px">{{verify}}</span>
                </div>
                <div class="h-info">
                    房主帐号:<span style="margin-left:50px">{{owner}}</span>
                </div>
                <div class="h-info">
                    房主姓名:<span style="margin-left:50px">{{owner_name}}</span>
                </div>
                <div class="h-info">
                房主信誉:<span style="margin-left:50px">{{house_owner_credit}}</span>
                </div>
                <div class="h-info">
                房子可用:<el-input
                        placeholder="请输入内容"
                        v-model="state"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    省份:<el-input
                        placeholder="请输入内容"
                        v-model="provi"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    城市:<el-input
                        placeholder="请输入内容"
                        v-model="city"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    市区:<el-input
                        placeholder="请输入内容"
                        v-model="sector"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    小区:<el-input
                        placeholder="请输入内容"
                        v-model="commu_name"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    具体地址:<el-input
                        placeholder="请输入内容"
                        v-model="specific_location"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    楼层:<el-input
                        placeholder="请输入内容"
                        v-model="floor"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    有无电梯:<el-input
                        placeholder="请输入内容"
                        v-model="elevator"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    价格:<el-input
                        placeholder="请输入内容"
                        v-model="lease"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    房型:<el-input
                        placeholder="请输入内容"
                        v-model="house_type"
                        v-bind:disabled="showinput">
                </el-input>
                </div>
                <div class="h-info">
                    评论
                <el-table
                    :data="tableData"
                    stripe
                    style="width:800px;margin-left: 100px">
                    <el-table-column
                            prop="user_id"
                            label="评论者"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="comment"
                            label="评论">
                    </el-table-column>
                    <el-table-column
                            prop="comment"
                            label="图片"
                            width="180">
                    </el-table-column>
                </el-table>
                </div>
            </div>
             <div>
                 <el-button style="margin-right:200px" plain @click="Enter1">修改</el-button>
                 <el-button style="margin-right:200px" plain @click="Enter2">确认</el-button>
             </div>
         </div>
        </div>
    </div>
</template>

<script>
    import {getMyHouse} from "../../../../../resource/house";
    export default {
        components: {},
        data() {

            return {
                showinput:"true",
                house_hash:0,
                owner_id:0,
                verify:0,
                owner:0,
                owner_name:0,
                state:0,
                provi:"",
                city:"",
                sector:"",
                commu_name:"",
                specific_location:"",
                floor:0,
                elevator:true,
                lease:0,
                house_type:0 , // 1 一室 2 二室 3 其他
                house_owner_credit:0,       //房主的信誉
                tableData:[{

                }],
                phonelist:[
                    {key: 'a', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561528949274&di=6bde8ecad4517ba2a488a21b033799c7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F458af12108c4da0f1cf4fe8e2713a458898e332b28196-jdjJ3j_fw658'},
                    {key: 'b', src: '/xxx/static/img/aaa.jpg'}
                ],
                note: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk3.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk1.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },

            }
        },
        created(){
            getMyHouse().then(res => {
                this.tableData = res.data.house_comment;
                this.house_hash = res.data.house_hash;
                this.owner_id = res.data.owner_id;
                this.owner = res.data.owner;
                this.verify = res.data.verify;
                this.owner_name = res.data.owner_name;
                this.state = res.data.state;
                this.provi = res.data.low_location.provi;
                this.city = res.data.low_location.city;
                this.sector =res.data.low_location.sector;
                this.commu_name = res.data.low_location.commu_name;
                this.specific_location = res.data.specific_location;
                this.floor = res.data.floor;
                this.elevator = res.data.elevator;
                this.lease = res.data.lease;
                this.house_type = res.data.house_type;
                this.house_owner_credit = res.data.house_owner_credit;



            })
        },
        methods:{
            Enter1(){
                this.showinput =false;
            },
            Enter2(){
                this.showinput=true;
            },
            change_p(){
                src:'http://www.w3school.com.cn/example/html/venus.html';
            }
        }
    }
</script>

<style scoped lang="scss">
    .Myhouse{
        width: 100%;
        height: 100px;
    }
    .bk{
        width:100%;
        height: 600px;
    }
    .button_group{
        color: white;
        float: left;
        margin-left: 40px;
        width:250px;
        line-height: 70px;
        font-size: 200%;
    }
    .phone{
        width:100%;
        height:400px;
    }
    .hourse{
        width:400px;
        float: left;
        margin-left: 50px;
    }
    .h-info{
        float: left;
        margin-left: 50px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>