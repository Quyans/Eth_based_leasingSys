<template>
    <div class="home":style="note">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
            <div class="content">
                    <router-view></router-view>
        </div>
    </div>
</template>

<script>


    import vHead from './components/Header.vue';
    import vSidebar from './components/Sidebar.vue'
    export default {
        name: 'PersonInfo',
        components: {vHead,vSidebar},
        data(){
            return{
                note:{
                    backgroundImage: "url(" + require("../../../../image/User/bk1.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                },
            }
        }

    }
</script>

<style type="text/css" scoped>
    @import "../../style/main.css";
    @import "../../style/color-dark.css";
</style>