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
}
