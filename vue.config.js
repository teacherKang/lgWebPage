module.exports = {
  devServer: {
    open: false,
    port: 9999,
    proxy: {
      '/api': {
        target:process.env.URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' 
        }
      }
    }
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': 'brown',
            'link-color': 'brown',
            'border-radius-base': '5px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
}
