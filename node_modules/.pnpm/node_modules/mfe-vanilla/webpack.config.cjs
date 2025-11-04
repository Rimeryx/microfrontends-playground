const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/root.component.js",
  output: {
    filename: "Rimeryx-mfe-vanilla.js",
    publicPath: "http://localhost:8082/",
    libraryTarget: "module",
  },
  experiments: { outputModule: true },
  module: {
    rules: [
      { test: /\.html$/i, loader: "html-loader", options: { sources: false } },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpe?g|gif|svg|webp)$/i, type: "asset/resource", generator: { filename: "assets/[name][ext]" } },
    ],
  },
  devServer: {
    port: 8082,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: { directory: path.resolve(__dirname, "public") },
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: "<!doctype html><html><body><div id='app'></div></body></html>",
    }),
  ],
};
