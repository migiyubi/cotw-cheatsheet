const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyJSONWebpackPlugin = require('minify-json-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkBoxWebpackPlugin = require('workbox-webpack-plugin');

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
    }),
    new WebpackPwaManifest({
      short_name: 'CotW Cheat Sheet',
      name: 'theHunter: Call of the Wild Cheat Sheet',
      display: 'standalone',
      start_url: 'index.html',
      background_color: '#000000',
      theme_color: '#000000',
      icons: [{
        src: path.join(src, 'icon_512.png'),
        destination: path.join('assets', 'icons'),
        sizes: [192, 512],
      }],
      fingerprints: false
    }),
    new WorkBoxWebpackPlugin.GenerateSW({
      inlineWorkboxRuntime: true
    }),
    new MinifyJSONWebpackPlugin()
  ]
};
