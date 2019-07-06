<template>
        <div class="bk":style="note2">
            <div class="button_group">
                用户管理
            </div>
            <HR align=center width=1230px color=#7848ba SIZE=2></HR>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="photo"
                        label="图片"
                        width="180">
                    <template slot-scope="scope">
                        　　　　<img :src="scope.row.photo" width="100" height="100" class="head_pic"/>
                        　　</template>
                </el-table-column>
                <el-table-column
                        prop="low_location"
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
                this.tableData = res.verified
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
        box-shadow:0px 0px  15px 5px #aaa;
    }
    .button_group{
        color: white;
        float: left;
        margin-left: 40px;
        width:250px;
        line-height: 70px;
        font-size: 200%;
    }
</style>