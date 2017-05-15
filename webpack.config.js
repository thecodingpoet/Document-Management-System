const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, '/client/public/js/index.jsx'),

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
    path: path.resolve(__dirname, 'client/src/js'),
    filename: 'bundle.min.js'
  }
};
