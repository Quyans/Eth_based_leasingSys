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
                        prop="ownername"
                        label="房主用户名"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="owner"
                        label="房子名字"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="租客用户名"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="user"
                        label="租客名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="house_id_hash"
                        label="房子的房产证的hash"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="commu_name"
                        label="小区"
                        width="200">
                </el-table-column>
                <el-table-column
                        label="仲裁">
                    <template slot-scope="scope">
                        <el-button @click="own(scope.row)" type="text" >房主违约</el-button>
                        <el-button @click="used(scope.row)" type="text">房客违约</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
</template>

<script>

    import {managerGet,managerRes} from "../../../../../resource/tract";
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
            managerGet().then(res => {
                this.tableData = res.tract;
            })
        },



        methods:{
            own(rows){
            managerRes(rows.username,rows.ownername,1);
            },
            used(rows){
                managerRes(rows.username,rows.ownername,2);
            }
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
        text-align: center;
        width:250px;
        line-height: 50px;
        font-size: 150%;
    }
</style>