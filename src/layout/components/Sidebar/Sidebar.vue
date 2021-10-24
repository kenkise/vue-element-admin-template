// 主体sidebar

<template>
  <div id="sidebarStyle" :class="sidebar ? 'sidebarWidthall' : 'sidebarWidth'">
    <div :class="sidebar ? 'iconTit' : 'noiconTit'">
      <img src="@/assets/navTitle.png" alt="" />
    </div>

    <!--  default-openeds的index取决于el-submenu的index值-->
    <el-menu
      :default-active="chooseActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :background-color="variables['menu-background']"
      unique-opened
      :text-color="variables['menu-color']"
      :active-text-color="variables[' menu-color-active']"
      router
      :collapse-transition="false"
      :collapse="!sidebar"
    >
      <SidebarItem ></SidebarItem>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './commponent/SidebarItem';
// 使用scss变量的形式:export引入
import variables from '@/styles/variables.scss';
import { mapGetters } from 'vuex';
export default {
  computed: {
    variables() {
      return variables;
    },
    ...mapGetters(['sidebar']),
    chooseActive() {
      const route = this.$route;
      const { path } = route;

      return path;
    },
  },

  data() {
    return {
      routerList: [],
      routers:[]
    };
  },

  created() {
  
  },
  components: {
    SidebarItem,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
