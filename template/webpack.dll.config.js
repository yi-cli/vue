const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // 想要打包的模块的数组
  entry: {
    vendor: ['vue', 'vue-router', 'vuex', 'axios']
  },
  devtool: '#source-map',
  output: {
    path: path.join(__dirname, './static/js'),
    filename: '[name][hash:6].dll.js',
    library: '[name]_library'
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new CleanWebpackPlugin(['static'])
  ],
  resolve: {
    alias: {
      // Don't add vendor path point
    }
  }
}