import Vue from 'vue'
import Router from 'vue-router'

import {toFirstLowerCase, toFirstUpperCase} from "../../utils/index";
import {hasLoggedIn} from "../../resource/authorization";

const views = require.context('./views',true,/(\w+)\/\1/i)


/*
对组件的引用需先考虑一下引用方式，如果没有，再直接通过import引用
 */
/*
 第一种引用方式
 可以引用符合如下规范的组件：
   路径为./views/componentName/ComponnentName
   (注意大小写)
 例如：
   ./views/home/Home.vue
   可以通过_('home')或_('Home')引用
*/
const _ = name => views(`./${toFirstLowerCase(name)}/${toFirstUpperCase(name)}.vue`).default

Vue.use(Router)


export let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: _('home')
        },
        {
            path:'/group/:id',
            name:'group',
            props:true,
            component:_('group')
        },
        {
            path:'/person',
            name:'personInfo',
            props:true,
            component:_('personInfo'),
            children:[
                {
                    path:'/info',
                    name:'info',
                    props:true,
                    component: resolve => require(['./views/personInfo/components/Info.vue'], resolve),
                },
                {
                    path:'/pocket',
                    name:'pocket',
                    props:true,
                    component: resolve => require(['./views/personInfo/components/pocket.vue'], resolve),
                },
                {
                    path:'/Myhouse1',
                    props:true,
                    component: resolve => require(['./views/personInfo/components/Myhouse.vue'], resolve),
                },
                {
                    path:'/Mybus',
                    props:true,
                    component: resolve => require(['./views/personInfo/components/Mybus.vue'], resolve),
                },
                {
                    path:'/addhouse',
                    props:true,
                    component: resolve => require(['./views/personInfo/components/addhouse.vue'], resolve),
                }
            ]

        },

    ]
})
// router.beforeEach(((to, from, next) => {
//
//     if (!hasLoggedIn()){
//         // 跳转到首页的登录页
//         window.location.href = `/#/login?redirect=${encodeURIComponent(location.href)}`
//     }else {
//         next()
//     }
// }))