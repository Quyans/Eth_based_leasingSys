import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/global.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


import checkingListenerWorker from 'worker-loader!./checkingListener.worker.js'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */)

let vue = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

Notification.requestPermission()

//
// let worker = new checkingListenerWorker()
// worker.onmessage = e=>{
//     let hasJustOpenedCheckList = e.data
//     console.log(hasJustOpenedCheckList)
//
//     let notificationMessage = ''
//     if (hasJustOpenedCheckList.length > 1) {
//         notificationMessage = `您有${hasJustOpenedCheckList.length}个群组待签到`
//     } else {
//         notificationMessage = `您加入的群组 ${hasJustOpenedCheckList[0].groupName} 正在签到`
//     }
//     try {
//         new Notification(notificationMessage)
//     } catch (e) {
//         navigator.serviceWorker.ready.then((registration)=>{
//             registration.showNotification(notificationMessage)
//         })
//     }
//     vue.$message.info(notificationMessage)
// }