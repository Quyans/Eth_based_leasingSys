<template>
    <div id="searchCondition" style=";width: 80%;margin: 0 auto">
        <el-row>
            <el-col :span="12">
                <div  class="grid-content bg-purple" style="">
                    <el-row>
                        <el-col :span="4">
                            <div class="grid-content bg-purple">
                                <el-tag >位置</el-tag>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <el-radio-group v-model="site_select">
                                <el-radio :label="0">全  &nbsp; 部</el-radio>
                                <el-radio :label="1">历下区</el-radio>
                                <el-radio :label="2">历城区</el-radio>
                                <el-radio :label="3">市中区</el-radio>
                                <el-radio :label="4">槐荫区</el-radio>
                                <el-radio :label="5">天桥区</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light" style="">
                    <el-row>
                        <el-col :span="4">
                            <div class="grid-content bg-purple">
                                <el-tag >租金</el-tag>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <el-radio-group v-model="type_select">
                                <el-radio :label="0">全部</el-radio>
                                <el-radio :label="1">一室</el-radio>
                                <el-radio :label="2">二室</el-radio>
                                <el-radio :label="3">三室</el-radio>
                                <el-radio :label="4">四室</el-radio>
                                <el-radio :label="5">五室</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>

        <el-row style="">
            <el-col :span="12">
                <div  class="grid-content bg-purple" style="background-color: darkgrey">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <el-tag >租金</el-tag>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <el-radio-group v-model="lease_select">
                            <el-radio :label="0">不限</el-radio>
                            <el-radio :label="1">500元以下</el-radio>
                            <el-radio :label="2">500-1000元</el-radio>
                            <el-radio :label="3">1000-1500元</el-radio>
                            <el-radio :label="4">1500-2000元</el-radio>
                            <el-radio :label="5">2000元以上</el-radio>
                        </el-radio-group>
                    </el-col>
                    <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light" style="height: 50px;">
                    <el-row>
                        <el-col :span="4">
                            <div class="grid-content bg-purple">
                                <el-tag >位置</el-tag>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <el-radio-group v-model="lease_type">
                                <el-radio :label="0">全部</el-radio>
                                <el-radio :label="1">整租</el-radio>
                                <el-radio :label="2">合租</el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>

        <el-row style="">
            <el-col :span="16">
                <div  class="grid-content bg-purple" style="background-color: darkgrey">
                    <el-col :span="4">
                        <div id="moreSelect" class="grid-content bg-purple">
                            <el-tag >更多筛选</el-tag>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <el-checkbox v-model="elavator">电梯房</el-checkbox>
                    </el-col>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "searchCondition",
        data(){
            return{
                site_select: 3,
                lease_select:2,
                type_select:3,
                lease_type:2,
                elavator:false
            }
        }
    }
</script>

<style>
   #searchCondition .el-radio__input{
        display: none;
    }

   #searchCondition .el-radio{
       margin-top: 5px;
       margin-bottom: 5px;
   }

    #searchCondition .el-row{
        padding: 5px 0;
    }
    #searchCondition .el-tag{
        background-color: #ffd068;
        color: #fff9ef;
    }
    #moreSelect .el-tag{
        background-color: #ffffff;
        color: black;
    }
</style>