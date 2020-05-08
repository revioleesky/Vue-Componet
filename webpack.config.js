const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development';
module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  entry: NODE_ENV === 'npm' ? './src/index.js' : './src/main.js',
  output: {
    path: path.resolve(__dirname, NODE_ENV === 'npm' ? './build' : './dist'),
    filename: NODE_ENV === 'npm' ? 'index.js' : 'build.js',
    publicPath: '/', //通常是CDN地址
    libraryTarget: 'umd',
    library: 'vue-cnname-avatar'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    hot: true,
    port: '3000', //默认是8080
    historyApiFallback: true,
    quiet: false, //默认不启用
    inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: "errors-only", //终端仅打印 error
    overlay: false, //默认不启用
    clientLogLevel: "silent", //日志等级
    compress: true //是否启用 gzip 压缩
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  "overrideBrowserslist": [
                    ">0.25%",
                    "not dead"
                  ]
                }),
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240, //10K
              esModule: false,
              name: '[name]_[hash:6].[ext]',
              outputPath: "assets"
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'public/js/*.js',
        to: path.resolve(__dirname, 'dist', 'js'),
        flatten: true,
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css' //个人习惯将css文件放在单独目录下
    }),
    new OptimizeCssPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
}

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'npm') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ])
} else {
  module.exports.plugins = (module.exports.plugins || []).concat([
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
    }),
  ])
}