<template>
        <div class="bk":style="note2">
            <div class="button_group">
                用户管理
            </div>
            <HR align=center width=1200px color=#7848ba SIZE=2></HR>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="photo"
                        label="图片"
                        width="180">
                    <template slot-scope="scope">
                        <img :src="fir1" width="100" height="100" class="head_pic"/>
<!--                        　　　　<img :src="fir+scope.row.house_pic" width="100" height="100" class="head_pic"/>-->
                        　　</template>
                </el-table-column>
                <el-table-column
                        prop="low_str_location"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="lease"
                        label="费用"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="house_type"
                        label="房型"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="lease_type"
                        label="状态"
                        width="100">
                </el-table-column>
            </el-table>
        </div>
</template>

<script>

    import {getHouseList} from "../../../../../resource/user";
    export default {
        name: "houseinfo",
        components: {},


        data() {
            return {
                fir:"http://211.87.230.14:8080/ipfs/",
                fir1:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561713939&di=25c1a8a562a1dd37fe024f0604fd46b3&src=http://r.bstatic.com/images/hotel/max1024x768/987/98767654.jpg",
                tableData:[{

                }],
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },

            }
        },
        created(){
            getHouseList().then(res => {
                this.tableData = res.data.verified;
            })
        },



        methods:{
        }
    }
</script>

<style scoped lang="scss">

    .bk{
        width:100%;
        height: 600px;
        overflow-y: scroll;
        box-shadow:0px 0px  15px 5px #aaa;
    }
    .button_group{
        color: white;
        background-color: #6e3eb4;
        float: left;
        width:250px;
        text-align: center;
        line-height: 50px;
        font-size: 150%;
    }
</style>