<template>
    <div class="home" :style="note"  >
        <div   class="sub_home" :style="sub_note" style="">
                <MyTitle></MyTitle>
        </div>

    </div>
</template>

<script>

    import Icon from "@/components/Icon";
    import {getGroupInfo} from "@/resource/group";
    import MyTitle from "./components/MyTitle"
    export default {
        name: 'home',
        components: {
            Icon,
            MyTitle
        },
        created() {
        },
        data() {
            return {
                BASE_URL: process.env.BASE_URL,
                searchId: '',
                isScanningQRCode: false,
                note:{
                    backgroundImage: "url(" + require("../../../../image/User/bk1.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',
                },
                sub_note:{
                    backgroundImage: "url(" + require("../../../../image/User/bk2.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',
                }

            }
        },
        methods: {



        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        width: 100%;
        height: 100%;
    }

</style>
<style lang="scss" scoped>
    .home {
        section.main {
            padding: 0 1em;
        }
        height: 100%;
        width: 100%;
        position: absolute;
        /*.icon_scan {*/
            /*width: 14px;*/
            /*height: 14px;*/
            /*vertical-align: bottom;*/
        /*}*/
    }
    .sub_home{
        position: relative;
        margin: 0 auto;
        top: 40px;
        box-shadow:5px 5px 30px darkgrey;
        min-height: 400px;
        width: 80%;
    }
</style>
<style lang="scss">
    .el-dialog {
        width: 100% !important;
        max-width: 450px;
    }
    #app {
        height: 100%;
    }
</style>