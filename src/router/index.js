import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';
Vue.use(VueRouter);

//解决重复点击tabbar报错问题push
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  // console.log('push');
  return originalPush.call(this, location).catch((err) => err);
};
//解决重复点击tabbar报错问题replace
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  // console.log('replace');
  return originalReplace.call(this, location).catch((err) => err);
};

// constantRoutes： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index'),
  },
  {
    path: '/',
    // 你可以选择不同的layout组件
    component: Layout,
    // 这里开始对应的路由都会显示在app-main中
    redirect: '/form',
    children: [
      {
        path: '/form',
        component: () => import('@/views/form/index'),
        name: 'Form',
        meta: { name: '表单封装' },
      },
      {
        path: '/upload',
        component: () => import('@/views/upload/index'),
        meta: { name: '文件切片上传' },
      },
      {
        path: '/echarts',
        component: () => import('@/views/echarts/index'),
        meta: { name: '饼图' },
      },
    ],
  },
];
// asyncRoutes： 代表那些需求动态判断权限并通过 addRoutes 动态添加的页面。

const router = new VueRouter({
  routes: constantRoutes,
});

export default router;
