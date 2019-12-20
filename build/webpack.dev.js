const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app : "../src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[hash:20].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname,"dist"),
    host: "localhost",
    port: 9003
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"../src")
    },
    extensions: ["tsx","ts","js"]
  },
  module: {
    rules :[
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: true
    })
  ]
}