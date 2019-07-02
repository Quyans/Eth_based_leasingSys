<template>
    <div style="width: 80%;min-height: 80px; background-color: wheat">
        <p>请求人姓名{{content.name}}</p>
        <p>小区{{content.commu_name}}</p>
        <p>处理状态{{state}}</p>
        <el-button-group v-if="content.state=='1'">
            <el-button>同意</el-button>
            <el-button>拒绝</el-button>
        </el-button-group>
    </div>
</template>

<script>
    export default {
        name: "notify",
        props:[
            'content'
        ],
        computed:{
            state(){
                switch (this.content.state){
                    case 0:
                        return '房主未批准'
                    case 1:
                        return  '请您确认合约'
                    case 2:
                        return  '正在等待房主确认'
                }
            }
        },
        data(){
            return{
                stateStr:""
            }
        }
    }
</script>

<style scoped>

</style>