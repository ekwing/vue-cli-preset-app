const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve
      .alias
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
        .set('utils', resolve('src/utils'))
        .set('views', resolve('src/views'))
  },
  devServer: {
    proxy: {
      '/mock/': {
        target: 'https://nei.netease.com/api/apimock',
        changeOrigin: true,
        pathRewrite: {
          '/mock': '/mockServer-key'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/mixins.scss";
          @import "@/styles/vars.scss";
        `
      }
    }
  }
}