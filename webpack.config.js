const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  resolve: {  
    alias: {
      '@components': path.resolve(__dirname, './src')  // Thiết lập đường dẫn mặc định root
    },
    extensions: ['.wasm', '.mjs', '.js', '.json']  //loại bỏ các đuôi file khi import
  },
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js', //có thể thêm main.[hash:6].js, thêm hash tránh trình duyệt cache lại file js được output trước đó. Số đằng sau là số kí tự muốn hash 
    publicPath: '/',
  },
  // optimization: {     //giúp phân tách các đoạn code và thư viện giống nhau ra file riêng
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  devServer: {
    historyApiFallback: true,
    compress: true, //thay đổi port cho webserver
    port: 9000, 
  },
  devtool: 'inline-source-map', //Giúp tìm ra được lỗi xảy ra ở file nào hoặc dùng: mode: 'development'
  // watch: true, // tự động build lại khi có thay đổi
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|gif|j?g)?$/,
        use: 'flie-loader?name=./images/[name].[ext]'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    filename: 'index.html',
    title: "Demo webpack workbox"
    }),
    new webpack.ProvidePlugin({ // hỗ trợ sử dụng Jquery
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new ESLintPlugin() 
  ],
};