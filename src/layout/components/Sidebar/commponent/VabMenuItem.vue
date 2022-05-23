<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2021-10-20 09:51:14
 * @LastEditTime: 2022-05-05 14:55:13
-->
// 这是不带二级路由的

<template>
<div>
  <template v-for="item in routers ">
<el-menu-item :index="item.path" :key="item.name">
        <i class="el-icon-document"></i>
        <span slot="title">{{item.meta.name}}</span>
      </el-menu-item>
  </template>
</div>
  
</template>

<script>
import {constantRoutes} from '@/router/index'
export default {
  name:'VabMenuItem',
  data(){
    return{
      routers:[]
    }
  },
  created(){
    const [,routers] = constantRoutes
    this.routers = routers.children
    
  }
}
</script>

<style>

</style>