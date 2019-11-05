const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname,'dist/'),
    filename: "bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer : {
    inline: false,
    contentBase: "./dist",
  },
  presets: ["react-hmre"]
};