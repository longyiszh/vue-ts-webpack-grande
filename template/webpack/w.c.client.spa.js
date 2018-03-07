const merge = require('webpack-merge');

const { root } = require('../lib/helpers');

const baseconfig = require('./w.c.client.base');

let config = merge(baseconfig, {

  output: {
    path: root('dist/client'),
    filename: '[name].[hash].js'
  }

});

module.exports = config;

