<!--用来展示地图组件并且标记-->
<template>
    <div class="Map" style="height: 500px;width: 500px">
        <div id="allmap"></div>
    </div>
</template>

<script>
    /* eslint-disable quotes,camelcase */

    import {MP} from "../resource/map"
    //  import {MP} from "./js/BMap"
    //  import {Change} from './js/changeJingwei'
    export default {
        name: 'ShowPosition',
        props:[
            "long","lat"
        ],
        data () {
            return {

            }
        },

        mounted() {
            var that = this;
            this.$nextTick(function () {
                MP().then( BMap => {
                    // 百度地图API功能
                    var map = new BMap.Map("allmap");
                    var point = new BMap.Point(that.long, that.lat);
                    map.centerAndZoom(point, 15);
                    var marker = new BMap.Marker(point);  // 创建标注
                    map.addOverlay(marker);               // 将标注添加到地图中
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                })
            })
        },

        methods: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #allmap {
        height: 100%;
        width: 100%;
    }
</style>