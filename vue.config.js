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
            remUnit: 37.5,
            // baseDpr: 2
          })
        ]
      }
    }
  }
};
