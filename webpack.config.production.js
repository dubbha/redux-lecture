// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", "./index"],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /assets\/src/],
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.(src|js|jsx)$/,
        include: path.join(__dirname, 'assets/code'),
        use: [{ loader: 'raw-loader' }],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",

            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",

            options: {
              limit: 10000,
              mimetype: "image/svg+xml"
            }
          }
        ]
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
            loader: 'url-loader',
            options: { mimetype: 'video/webm' }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'url-loader',
            options: { mimetype: 'video/mp4' }
          }
        ],
        include: path.join(__dirname, 'assets')
      }
    ]
  },

  optimization: {
    minimize: true,
  }
};
