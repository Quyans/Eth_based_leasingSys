<template>
    <div>
        <div class="bk":style="note2">
            <div class="button_group">
                人脸验证
            </div>
            <HR align=center width=1230px color=#7848ba  SIZE=2></HR>
        </div>
    </div>
</template>

<script>
    import {invest,getUserBalance} from "../../../../../resource/user";
    export default {
        components: {},
        data() {
            return {
                num:200,
                inn:0,
                note2: {
                    backgroundImage: "url(" + require("../../../../../image/User/bk5.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: '100% 100%',

                },

            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">

    .bk {
        width: 100%;
        height: 600px;
        box-shadow:0px 0px  15px 5px #aaa;
    }
    .button_group{
        color: white;
        float: left;
        background-color: #7140b6;
        width:250px;
        line-height: 50px;
        text-align: center;
        font-size: 150%;
    }
</style>