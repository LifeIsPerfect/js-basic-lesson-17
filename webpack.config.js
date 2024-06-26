const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
