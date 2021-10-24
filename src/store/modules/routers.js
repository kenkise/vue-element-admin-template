/*
 * @Description: 
 * @Author: 曹老板
 * @Date: 2021-10-23 22:00:38
 * @LastEditTime: 2021-10-24 14:54:23
 * @LastEditors: 曹老板
 */

import {constantRoutes} from '@/router/index'
import {getUserMenuList} from '@/api/user'
import { convertRouter} from '@/utils/handleRoutes'
const state ={routers:[]}

const mutations ={
  SET_ROUTERS_ALL(state,asyncRoutes){
    state.routers=  constantRoutes.concat(asyncRoutes)
  }
}

const actions = {
  setRoutersAll({commit},id){
    console.log(id);
    return new Promise((resolve,reject)=>[
      getUserMenuList(id.id).then((res)=>{
        let accessRoutes = convertRouter(res.data)
        commit('SET_ROUTERS_ALL',accessRoutes)
        resolve(res.data)
      }).catch((error)=>{
        reject(error)
      })
    ])
  }
}


export default {
  namespaced:true,
  state,
  mutations,
  actions
}