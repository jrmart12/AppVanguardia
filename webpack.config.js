const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/App.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/        
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/        
      }
    ]
  },
  mode: "development"
};