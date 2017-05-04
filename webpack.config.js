/**
 * Created by NB on 5/4/2017.
 */

var glob = require('glob');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

process.env.NODE_ENV = 'production';

module.exports = {
  entry: globEntries('!(webpack.config).js'),
  target: 'node',

  externals: [nodeExternals()],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
};

function  globEntries(globpath) {
  var files = glob.sync(globpath);
  var entries = {};

  for (var i = 0; i < files.length; i++) {
    var entry = files[i];
    entries[path.basename(entry, path.extname(entry))] = './' + entry;
  }

  return entries;
}