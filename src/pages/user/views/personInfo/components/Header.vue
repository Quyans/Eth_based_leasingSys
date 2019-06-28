<template>
    <div class="header":style="note">
        <div class="logo">用户中心</div>
        <div class="header-right">
                <el-button plain @click="goto">首页</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                note:{
                    backgroundImage: "url(" + require("../../../../../image/User/bk1.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                },
            }
        },
        methods:{
            goto() {
                this.$router.replace('/')
            },
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: indigo;
    }
    .header .logo{
        float: left;
        margin-left: 40px;
        width:250px;
        line-height: 70px;
    }
    .header-right{
        float: right;
        margin-top: 10px;
        padding-right: 50px;
    }

</style>
