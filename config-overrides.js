const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return {
    entry: "index.tsx",
    output: {
      path: __dirname + "/dist",
      filename: "index_bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({ inlineSource: ".(js|css)$" }),
      new HtmlWebpackInlineSourcePlugin(),
    ],
  };
};
