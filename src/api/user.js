import request from '@/utils/request'

// 查询当前登陆用户所拥有的菜单权限
export function getUserMenuList (uid) {
  return request({
    url:`/getMentListAll/${uid}`,
    method:'get'
  })
}
