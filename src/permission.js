import router from '@/router'
import store from './store'
import {recordRoute,routesWhiteList,authentication,isShowNprogress,isDescription} from './config'
import { Message } from 'element-ui'
import VabProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import getPageTitle from '@/utils/pageTitle'



// 详细设置进度条样式
VabProgress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
})
// 和beforeEach差不多
router.beforeResolve(async(to,from,next)=>{
  console.log(routesWhiteList);
  if(isShowNprogress) VabProgress.start()
  let hasToken = store.getters.token
  if(!isDescription){hasToken=true}
  if(hasToken){
    // 是不是进登陆页
      if(to.path == '/login'){
        next('/')
        if(isShowNprogress) VabProgress.done()
      }else{
   // 如果已经有令牌的用户请求的不是登录页，是其他页面
   // 就从Vuex里拿到用户的信息，这里也证明用户不是第一次登录了
  
        const hasGetUserInfo = store.getters.id
        //判断它有没有获取用户信息权限
       if(hasGetUserInfo){
        // 已经获取到了用户权限
         next()
          // if(store.getters.init === false){
          //   // 还未查询到用户的信息
          //   store.dispatch(`menu/getUserMent`).then(()=>{
          //     next({...to,replace:true})
          //   }).catch(()=>{
          //   Message.error({message:'获取用户信息权限失败'})
          //   })
          // }else{
          //   next()
          // }
       }else{
           // 如果有令牌，但是没有用户信息，证明用户是第一次登录，通过Vuex设置用户信息
          try{
            let accessRoutes = []
            await store.dispatch('user/getUserInfo')
            // 判断是前端控制还是后台控制
            if(authentication=='intelligence'){
              console.log(1);
            }else if(authentication == 'all'){
             accessRoutes=  await store.dispatch('routers/setRoutersAll',{id:store.getters.id})
            }
            router.addRoutes(accessRoutes)
            next({ ...to, replace: true })
            // let a

          }catch{
            await store.dispatch('user/resetToken')
            if(isShowNprogress) VabProgress.done()
          }
         
          
       }
        
      }
  }else{
  // 没有token再去判断访问的是不是白名单页面
  if(routesWhiteList.indexOf(to.path)!=-1){
    next()
  }else{
    // recordRoute也是setting.config.js的配置(注意这里是?+redirect,不能写成/redirect)
    if(recordRoute){
      next(`/login?redirect=${to.path}`)
    }else{
      next('/login')
    }
    // 关闭进度条
    if(isShowNprogress) VabProgress.done()
  }
  }

})
router.afterEach(() => {
  if(isShowNprogress) VabProgress.done()
})