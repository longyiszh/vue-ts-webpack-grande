const { resolve } = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const { root } = require('../lib/helpers');
const clientpath = root('src/client');

let config = {

  mode: "development",

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              esModule: true,
              'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader'
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve(clientpath, "tsconfig.client.json"),
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'assets/'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        /* Global scss */
        test: /\.scss$/,
        include: resolve(clientpath, 'styles.scss'), 
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [ 'css-loader?sourceMap', 'postcss-loader', 'sass-loader']
          }
        )
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      root: root('node_modules')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: {
      errors: true,
      warnings: false
    }
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin("styles.[hash].css")
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = '#source-map';
  config.mode = 'production';
}

module.exports = config;
