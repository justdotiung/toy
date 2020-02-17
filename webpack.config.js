const path = require("path");
module.exports = {
  name: "toy-set",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"]
  },

  entry: {
    app: ["./index"]
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-react", "@babel/preset-env"],
    plugins: ["react-hot-loader/babel"] }
      }
    ]
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "toybundle.js",
    publicPath: "/dist/"
  }
};
