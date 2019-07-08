<!--让用户输入房源地点-->
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
        name: 'SetPositionBaidu',
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
                    var point = new BMap.Point(116.331398,39.897445);
                    map.centerAndZoom(point,12);
                    // 创建地址解析器实例
                    var myGeo = new BMap.Geocoder();
                    // 将地址解析结果显示在地图上,并调整地图视野
                    myGeo.getPoint(this.name, function(point){
                        if (point) {
                            map.centerAndZoom(point, 16);
                            map.addOverlay(new BMap.Marker(point));
                            this.$emit('send',point);
                        }else{
                            alert("您选择地址没有解析到结果!");
                        }
                    }, this.city);
                })
            })
        },
        props: {


            province: {
                type: String
            },
            name: {
                type: String
            },
            city: {
                type:String
            },
            height: {
                type: Number
            },
            width: {
                type: Number
            }
        },
        methods: {
            sad(){
                let map = new BMap.Map("allmap");    // 创建Map实例
                map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 10);
                map.enableScrollWheelZoom(true);
                map.clearOverlays();
                console.log(data.result.location.lng);
                console.log(data.result.location.lat);
                let new_point = new BMap.Point(data.result.location.lng, data.result.location.lat);
                let marker = new BMap.Marker(new_point);  // 创建标注
                map.addOverlay(marker);              // 将标注添加到地图中
                map.panTo(new_point);
                map.setCurrentCity(this.province);          // 设置地图显示的城市 此项是必须设置的
            }
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