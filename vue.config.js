const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '新烘焙'
        return args
      })
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hsin_bakery/' // hsin_bakery 為 repo 名稱
    : '/'
}
