const webpack = require("webpack");
module.exports = {
  devtool: "source-map",
  entry: ["./src/index.js"],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: { presets: ["env", "stage-0", "react"] }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  }
};
