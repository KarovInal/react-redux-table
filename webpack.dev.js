'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    polyfills: 'whatwg-fetch'
  },

  output: {
    path: __dirname + '/dist',
    filename: 'src/js/[name].bundle.js'
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: {
            loader: 'css-loader'
          }
        })
      },

      {
        test: /\.(png|jpg|jpeg|gif)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/src/img/[name].[ext]'
            }
          }
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/src/fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  devtool: 'cheap-eval-source-map',

  devServer: {
    contentBase: './dist',
    port: 3000
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '/src/css/style.css'
    })
  ]
}