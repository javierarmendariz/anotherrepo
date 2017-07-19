var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3007', 'webpack/hot/only-dev-server', './src/main'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'bin'),
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
