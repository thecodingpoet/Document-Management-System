const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `${path.join(__dirname, '/client/public/js/index.jsx')}`
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|svg|jpeg)$/,
        loader: 'url-loader'
      }
    ]
  },
  target: 'web',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.resolve('client/src/js'),
    publicPath: '/',
    filename: 'bundle.min.js'
  },
  devServer: {
    contentBase: './client/src',
    hot: true
  },
  plugins: [
  ]
};
