const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "app"),
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify("browser")
    })
  ]
};
