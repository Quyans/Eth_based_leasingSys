<template>
        <div class="home">
            <v-head></v-head>
            <v-sidebar></v-sidebar>
            <div class="content-box" :class="">
                <div class="content">
                    <transition name="move" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
</template>

<script>

    import vHead from './component/Header.vue';
    import vSidebar from './component/Sidebar.vue'
    import vTags from './component/Tags'
    export default {
        name: 'home',
        components: {vHead,vSidebar},

        computed: {
            // editPerInfoFormData() {
            //     this.submitUserInfo.name = this.UserInfo.name;
            //     if (this.userHeadPhoto!=null){
            //         alert("有图片");
            //         this.submitUserInfo.profile=this.userHeadPhoto;
            //     }
            //     let formData = new FormData()
            //     console.log(this.submitUserInfo)
            //     Object.keys(this.submitUserInfo).forEach(key => {
            //         formData.append(key, this.submitUserInfo[key])
            //     })
            //     return formData
            // },

        },

        data() {
            return {
                note:{

                },
            }
        },

        methods: {
            goto() {
                this.$router.replace('/login')
            },
        }
    }
</script>

<style type="text/css" scoped>

    @import "../../style/main.css";
    @import "../../style/color-dark.css";

</style>