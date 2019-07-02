<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse":style="note"
                 text-color="indigo" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
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
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-user-solid',
                        index: 'info',
                        title: '个人资料'
                    },
                    {
                        icon: 'el-icon-s-cooperation',
                        index: 'pocket',
                        title: '钱包'
                    },
                    {
                        icon: 'el-icon-s-home',
                        index: '3',
                        title: '我的房屋',
                        subs: [
                            {
                                index: 'Myhouse1',
                                title: '房子1'
                            },
                            {
                                index: 'addhouse',
                                title: '添加房源',
                            },
                            {
                                index: 'upload',
                                title: '房子3'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-school',
                        index: 'Mybus',
                        title: '我的交易'
                    },
                    {
                        icon: 'el-icon-chat-line-round',
                        index: '2',
                        title: '我的通知',
                        subs: [
                            {
                                index: 'tabs',
                                title: '房主通知'
                            },
                            {
                                index: 'tabsUser',
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
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
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
