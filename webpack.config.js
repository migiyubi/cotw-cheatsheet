const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  context: src,
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    modules: [
      path.join(src),
      path.join(src, 'js'),
      'node_modules'
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(src, 'assets'), to: path.join(dist, 'assets') }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './html/index.html',
      inject: 'head'
    })
  ]
};
