/*
 * @Description:  3个子配置，通用配置|主题配置|网络配置导出
 * @Author: 曹老板
 * @Date: 2021-10-21 14:10:03
 * @LastEditTime: 2021-10-24 09:04:43
 * @LastEditors: 曹老板
 */

// 这里如果你想在外面引用的时候，可以直接引用对象里面的属性，必须用require引入，module.export抛出(permission。js第三行)
const setting = require('./setting.config')
const newwork = require('./net.config')

module.exports = Object.assign({}, setting,newwork)