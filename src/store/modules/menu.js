// import {getUserMenuList} from '@/api/requestItem/user'
// import {getUserId} from '@/utils/auth'
     
// const state = {
//   init: false, // 是否已加载用户权限信息
//   menuList: [], // 用户所拥有的菜单权限
//   buttonList: [] // 用户所拥有的按钮权限

// }
// // 改变状态值
// const mutations={
//   SET_SYSTEM_MENT(state,data){
//     state.init = true  // 已经加载用户权限 
//     state.menuList = data.menuTreeList // 注意是：menuTreeList
//     state.menuList = data.buttonList
//   }
// }
// // 定义行为
// const actions = {
//   // 获取用户信息权限
//   getUserMent({commit}){
//     debugger
//     return new Promise((resolve,reject)=>{
//       const userId = getUserId?getUserId:null
//       if(userId){
//         getUserMenuList(userId).then((res)=>{
//           if(res.code == 200){
//             // 获取到了, 将菜单和按钮数据保存到vuex状态
//             commit('SET_SYSTEM_MENT',res.data)
//             resolve(res.data) // 正常响应钩子
//           }
//         }).catch((err)=>{
//           reject(err)
//         })
//       }

//     })
//   }
// }
// export default{
//   namespaces:true, // 引用里需要指定模块名， /menu/GetUserMenu
//   state,
//   mutations,
//   actions
  
// }