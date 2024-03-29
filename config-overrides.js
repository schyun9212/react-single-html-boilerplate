const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return {
    ...config,
    entry: "./src/index.tsx",
    output: {
      path: __dirname + "/build",
      filename: "main.js",
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "public/index.html",
        inlineSource: ".(js|css)$",
        inject: "body",
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
      new MiniCssExtractPlugin(),
      new CompressionPlugin(),
    ],
  };
};
