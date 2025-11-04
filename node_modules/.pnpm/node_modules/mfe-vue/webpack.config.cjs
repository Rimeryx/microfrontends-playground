// webpack.config.cjs (Vue + single-spa, ESM en sortie)
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "Rimeryx-mfe-vue.js",
    publicPath: "http://localhost:8081/",
    libraryTarget: "module", // ESM
  },
  experiments: { outputModule: true },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: { extensions: [".js", ".vue"] },
  devServer: {
    port: 8081,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: { directory: path.resolve(__dirname, "public") },
    hot: false,
    liveReload: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      templateContent:
        "<!doctype html><html><body><div id='app'></div></body></html>",
    }),
  ],
};
