<!--
 * @Description: 😎在这里写你的描述
 * @Autor: 曹老板
 * @Date: 2021-10-17 16:49:14
 * @LastEditTime: 2022-04-26 17:21:45
-->
// 子菜单sidebar 用于区分是不是二级路由的，渲染不同的组件

<template>
  <!-- 这里使用动态组件判断是到哪个组件 -->
  <component :is="currentTabComponent">
    <!-- 判断是否有子路由进行递归渲染侧边栏 -->
    <template ></template>
  </component>
</template>

<script>
// 后期可以使用require.context一次性引入多个组件(前端工程化)
import VabMenuItem from './VabMenuItem.vue'
import VabSubMenu from './VabSubMenu.vue'
export default {
  created() {
    console.log(this.$router);
  },
  components:{
    VabMenuItem,
    VabSubMenu
  },
  computed:{
    currentTabComponent(){
      return 'VabMenuItem'
    }
  }
};
</script>

<style></style>
