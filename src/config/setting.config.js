/*
 * @Description: 
 * @Author: 曹老板
 * @Date: 2021-10-20 15:52:36
 * @LastEditTime: 2021-10-24 09:40:47
 * @LastEditors: 曹老板
 */
 const setting = {
  // intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
  authentication:'all',
  //不经过token校验的路由
  routesWhiteList: ['/login', '/register', '/404', '/401'],
  // 是否开启进度条
  isShowNprogress:true,
  // 是否开启登陆拦截
  isDescription:true,
   //token失效回退到登录页时是否记录本次的路由
   recordRoute: true,
   // 设置axios的baseUrl
   baseURL:'https://www.fastmock.site/mock/512368791e4caa990b604da7d99bf1d9/cmsTest',
   //需要加loading层的请求，防止重复提交
  debounce: ['doEdit'],
  
}

module.exports =setting