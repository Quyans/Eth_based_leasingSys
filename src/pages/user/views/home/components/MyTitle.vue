<template>
    <div class="my-title" :style="note">
        <div class="button_group" style="color: white">
            <i class="el-icon-user"></i>
            <el-button type="text" style="color: #eadcff" >登录</el-button>
            <el-button type="text" style="color: #eadcff">注册</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyTitle",

        data() {
            return {
                note: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk3.png") + ")",
                    backgroundRepeat: "no-repeat",
                    // height: '100%',
                    backgroundSize: '100% 100%'
                },
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-title{
        width: 100%;
        height: 300px;
        
    }
    .button_group{
        color: white;
        width: 150px;
        padding-left: 50px;
        padding-top: 20px;
    }
</style>