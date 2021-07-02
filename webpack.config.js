/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    '@babel/polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: [{ loader: 'babel-loader' }],
        include: __dirname
      },
      {
        test: /\.(src|js|jsx)$/,
        include: path.join(__dirname, 'assets/code'),
        use: [{ loader: 'raw-loader' }],
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader', options: { gfm: false } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'raw-loader' }],
          include: __dirname
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: { mimetype: 'image/png' }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'url-loader',
            options: { mimetype: 'image/gif' }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader',
            options: { mimetype: 'image/jpg' }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.webp$/,
        use: [
          {
            loader: 'url-loader',
            options: { mimetype: 'image/webp' }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.webm$/,
        use: [
          {
            loader: 'file-loader',
            options: { mimetype: 'video/webm' }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: { mimetype: 'video/mp4' }
          }
        ],
        include: path.join(__dirname, 'assets')
      }
    ]
  }
};
