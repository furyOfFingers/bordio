/* eslint-disable */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/Components/"),
      Constants: path.resolve(__dirname, "src/Constants/"),
      Modules: path.resolve(__dirname, "src/Modules/"),
      Redux: path.resolve(__dirname, "src/Redux/"),
      Store: path.resolve(__dirname, "src/Store/"),
      Types: path.resolve(__dirname, "src/Types/"),
      Utilits: path.resolve(__dirname, "src/Utilits/"),
      Config: path.resolve(__dirname, "src/Config/"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    liveReload: true,
  },
  plugins: [htmlPlugin],
};
