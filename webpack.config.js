let path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTML = require("html-webpack-plugin");

let conf = {
  context: path.resolve(__dirname, "src"),
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-react-jsx", "@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.module\.scss$/i,
        use: [
          {
            loader: process.env.NODE_ENV !== "development" ? MiniCssExtractPlugin.loader : "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]__[sha1:hash:hex:7]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /^((?!\.module).)*scss$/i,
        use: [
          {
            loader: process.env.NODE_ENV !== "development" ? MiniCssExtractPlugin.loader : "style-loader",
          },
          {
            loader: "css-loader",
          },
          "sass-loader",
        ],
      },
      {
        test: /.css$/i,
        use: [
          {
            loader: process.env.NODE_ENV !== "development" ? MiniCssExtractPlugin.loader : "style-loader",
          },
          "css-loader",
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    overlay: true,
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new HTML({
      template: "../index.html",
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};

module.exports = conf;
