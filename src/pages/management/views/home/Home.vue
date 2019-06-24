<template>
        <div class="home">
            <v-head></v-head>
            <v-sidebar></v-sidebar>
            <div class="content-box" :class="{'content-collapse':collapse}">
                <div class="content">
                    <transition name="move" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
<!---->
</template>

<script>

    import vHead from './component/Header.vue';
    import vSidebar from './component/Sidebar.vue'
    import vTags from './component/Tags'
    export default {
        name: 'home',
        components: {vHead,vSidebar,vTags},

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
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },

        methods: {
            goto() {
                this.$router.replace('/login')
            },
            update() {

                this.$refs.table.update()

            },
        }
    }
</script>

<style type="text/css">

    @import "../../style/main.css";
    @import "../../style/color-dark.css";
    .el-header{
        line-height: 100px;
        background-color:powderblue;

    }
    .el-aside {
        background-color: #545c64;
        color: #333;
        text-align: center;
        line-height: 1000px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height:1000px;
    }
</style>