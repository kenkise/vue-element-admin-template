/*
 * @Description:
 * @Author: 曹老板
 * @Date: 2021-10-24 09:03:39
 * @LastEditTime: 2021-10-24 09:38:13
 * @LastEditors: 曹老板
 */

const network = {
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  //登录失效code
  invalidCode: 402,
  //无权限code
  noPermissionCode: 401,
  //最长请求时间
  requestTimeout: 15000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //token名称
  tokenName: 'Authorization',
};

module.exports = network;
