const { resolve } = require('path');

const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const { root } = require('../lib/helpers');
const clientpath = root('src/client');
const baseconfig = require('./w.c.base');

let config = merge(baseconfig, {
  entry: {
    main: [
      resolve(clientpath, 'index.client.ts')
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(clientpath, 'index.html')
    }),

    new CopyWebpackPlugin([
      { 
        from: resolve(clientpath, 'statics'),
        to: 'statics',
        ignore: [".gitkeep"]
      }
    ])
  ],

  optimization: {}
  
});


if (process.env.NODE_ENV === 'production') {

  config.optimization.minimizer = [
    new UglifyJSPlugin({
      uglifyOptions: {
        sourceMap: true,
        compress: {
          warnings: false
        }
      }
    })
  ];

  config.plugins = (config.plugins || []).concat([

    new CleanWebpackPlugin([`${root('dist/client')}/**`], {root: root(), verbose: true}),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    })

  ])
}

module.exports = config;
