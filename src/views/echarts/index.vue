<template>
    <div :style="size">
        <el-button type="" @click="ss">点击</el-button>
        <BaseEcharts :options="options" :size="size"></BaseEcharts>
    </div>
</template>

<script>
import BaseEcharts from '@/base-ui/echarts/index'
import {gagueOption} from './gauge.js' // 仪表盘
export default {
    components:{
        BaseEcharts
    },
    data(){
        return {
            options:gagueOption,
            size:{
                width:'600px',
                height:'600px'
            }
        }
    },
    methods:{
    ss(){
        this.options.title.text='哈哈'
    }
    }
    
}
</script>

<style>

</style>