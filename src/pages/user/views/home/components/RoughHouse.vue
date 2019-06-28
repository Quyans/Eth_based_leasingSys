<template>
    <div id="roughHouse">
        <el-row style="height: 100%">
            <el-col :span="12">
                <div class="grid-content bg-purple">

                </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "RoughHouse"
    }
</script>

<style scoped>

</style>

<style>
    #roughHouse{
        height: 200px;
        width: 80%;
        background-color: black;
        display: inline-block;
    }
</style>