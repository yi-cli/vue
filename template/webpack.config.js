const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name][hash:6].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          eslint: {
            configFile: '.eslintrc.js'
          }
        }
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /(node_modules)/
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            postcss: [autoprefixer({browsers: ['> 1%', 'ie >= 9', 'iOS >= 6', 'Android >= 2.1']})]
          }
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg)(\?t=\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'static/images/[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor-manifest.json')
    }),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: { //html 压缩
        collapseWhitespace: true,
        minifyJS: true
      }
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './static/js/*.dll.js'),
      outputPath: 'static/js',
      publicPath: 'static/js'
    }),
    new ExtractTextPlugin('base.css'),
    new StyleExtHtmlWebpackPlugin({
      minify: true
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    historyApiFallback: true,
    port: 8088,
    host: '127.0.0.1',
    https: false,
    hot: true,
    compress: true,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}
// console.log(process.env.PORT)
if(process.env.NODE_ENV === 'dev') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin() // 跳过编译时出错的代码
  ])
} else if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
