<template>
  <div id="echartsBox" :style="size" ref="echartsRef"></div>
</template>

<script>

export default {
    props:{
        options:{
            type:Object,
            default:()=>{}
        },
        size:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
            myChart:''
        }
    },
    mounted(){
        this.echartsInit()
    },
    watch:{
        options:{   
        handler(newVal) {
        this.updateOption(newVal)
      },
      deep:true
        }
    },
    methods:{
        echartsInit(){
        const echartsRef = this.$refs.echartsRef
        this.myChart = this.$echarts.init(echartsRef,null,{
            renderer:'svg'
        });
        this.updateOption(this.options)
        },
        updateOption(options){
            this.myChart.setOption(options);
        }
    }
}
</script>

<style>

</style>