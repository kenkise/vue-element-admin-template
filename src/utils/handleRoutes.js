/*
 * @Description: 
 * @Author: 曹老板
 * @Date: 2021-10-24 10:05:57
 * @LastEditTime: 2021-10-24 10:08:25
 * @LastEditors: 曹老板
 */
 export function convertRouter(asyncRoutes) {
  return asyncRoutes.map((route) => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = (resolve) => require(['@/layout'], resolve)
      }  else {
        const index = route.component.indexOf('views')
        const path =
          index > 0 ? route.component.slice(index) : `views/${route.component}`
        route.component = (resolve) => require([`@/${path}`], resolve)
      }
    }
    if (route.children && route.children.length)
      route.children = convertRouter(route.children)
    if (route.children && route.children.length === 0) delete route.children
    return route
  })
}