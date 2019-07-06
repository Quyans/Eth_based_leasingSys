<template>
    <div>
        <div class="Mybus" :style="note">
            <div class="button_group">
                我的交易
            </div>
        </div>
        <div class="bk":style="note2">
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
            getTransRecord().then(res => {
                this.tableData = res.data.record
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