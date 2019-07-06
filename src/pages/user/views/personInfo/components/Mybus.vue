<template>
    <div>
        <div class="bk":style="note2">
            <div class="button_group">
                我的交易
            </div>
            <HR align=center width=1230px color=#7848ba SIZE=2></HR>
            <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="time"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="gas"
                        label="花费"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="low_location.provi"
                        label="省"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="low_location.city"
                        label="市"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="low_location.sector"
                        label="区"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="low_location.commu_name"
                        label="小区"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="specific_location"
                        label="详细地址">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>

    import {getTransRecord} from "../../../../../resource/user";
    export default {
        name: "Mybus",
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
            getTransRecord().then(res => {
                this.tableData = res.data.record
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
        background-color: #7140b6;
        width:250px;
        line-height: 70px;
        text-align: center;
        font-size: 200%;
    }
</style>