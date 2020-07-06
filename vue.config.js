const autoprefixer = require("autoprefixer");
const px2rem = require('postcss-px2rem');
const path = require('path');

module.exports = {
  // 关闭eslint检查
  lintOnSave: false,
  //资源引用路径
  publicPath:"./",
  // 配置css前缀,px转rem
  css: {
    loaderOptions:{
      less: {

      },
      postcss: {
        plugins: [
          autoprefixer(),
          px2rem({
            remUnit: 75, 
            baseDpr: 2
          })
        ]
      }
    }
  },
  
    // devServer: {
  //     // 代理
  //     proxy: {
  //         // 只要请求地址有'api'都会匹配上
  //         "/api": {
  //             target: "http://132.232.94.151:3005",
  //             ws: true,
  //             // 允许跨域
  //             changeOrigin: true,
  //             pathRewrite: {
  //                 "^/api": "" //通过pathRewrite重写地址，将前缀/api转为/
  //             }
  //         }
  //     }
  // }
};
