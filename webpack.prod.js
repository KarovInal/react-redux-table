'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },

  output: {
    path: __dirname + '/public',
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
            loader: 'css-loader',
            options: {
              minimize: true
            }
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

  plugins: [
    new ExtractTextPlugin({
      filename: '/src/css/style.css'
    }),
    new UglifyJSPlugin()
  ]
}