const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/g,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  externals: [nodeExternals()],

  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [new NodemonPlugin()]
};
