console.log('曹老板开源项目');

module.exports = {
  configureWebpack: {

  },
  devServer: {
    open: true, // npm run serve后自动打开页面
    port: 9527, // 开发服务器运行端口号
    proxy: {
      '/': {
        target: 'https://alex188.cn/h5app',
        changeOrigin: true, // 支持跨域 是否修改请求头中的host
        ws: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/': '',
        },
      },
    },
  },
};
