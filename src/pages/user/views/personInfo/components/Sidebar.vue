<template>
    <div class="sidebar">

        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse":style="note"
                 text-color="indigo" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item :index="subItem.index">
                                 {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <template v-if="item.subs1">
                        <el-submenu :index="item.index">
                            <template slot="title">
                                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                            </template>
                            <template v-for="subItem1 in name">

                                <el-menu-item  @click="setHouseId(subItem1.house_id_hash)">
                                   {{subItem1.commu_name}}
                                </el-menu-item>

                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                     </template>
                     </template>
            </template>
        </el-menu>

    </div>
</template>

<script>
    import {getUserInfo} from "../../../../../resource/user";
    export default {
        components: {},
        data() {
            return {
                house_hash:'123',
                collapse: false,
                houseid:"",
                name:[],
                items: [
                    {
                        icon: 'el-icon-user-solid',
                        index: '/info',
                        title: '个人资料'
                    },
                    {
                        icon: 'el-icon-s-cooperation',
                        index: '/pocket',
                        title: '钱包'
                    },
                    {
                        icon: 'el-icon-s-home',
                        index: '',
                        title: '我的房屋',
                        subs1: [
                        ]
                    },
                    {
                        icon: 'el-icon-s-home',
                        index: '/addhouse',
                        title: '添加房源'
                    },
                    {
                        icon: 'el-icon-school',
                        index: '/Mybus',
                        title: '我的交易'
                    },
                    {
                        icon: 'el-icon-chat-line-round',
                        index: '2',
                        title: '我的通知',
                        subs: [
                            {
                                index: '/tabs',
                                title: '房主通知'
                            },
                            {
                                index: '/tabsUser',
                                title: '用户通知',
                            },
                        ]
                    },
                ],
                note:{
                    backgroundImage: "url(" + require("../../../../../image/User/bk1.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                },
            }
        },
        created(){
            getUserInfo(123).then(res=>{
                this.items.subs1 = res.data.myhouse;
                this.name = res.data.myhouse;
            });
        },


        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        methods:{

            setHouseId(houseId){
                this.houseid = houseId;
                console.log(this.houseid)
                this.$router.push(`/Myhouse/${this.houseid}`)
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
