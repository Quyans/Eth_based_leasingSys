<template>
    <div>
        <div class="houseinfo" :style="note">
            <div class="button_group">
                用户管理
            </div>
        </div>
        <div class="bk":style="note2">
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="photo"
                        label="图片"
                        width="180">
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
                note: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk3_withTitle.jpg") + ")",
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
            getHouseList().then(res => {
                this.tableData = res.data.verified
            })
        },



        methods:{
        }
    }
</script>

<style scoped lang="scss">
    .Mybus{
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
</style>