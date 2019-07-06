<template>
    <div class="header":style="note">
        <div class="logo" style="background-color:rgb(198,181,237)">后台管理</div>
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
        margin-top: 10px;
        width:150px;
        line-height: 50px;
        text-align: center;
        height: 50px;
    }
    .header-right{
        float: right;
        margin-top: 10px;
        padding-right: 50px;
    }

</style>
