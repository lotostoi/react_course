let path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTML = require('html-webpack-plugin')

let conf = {
  context: path.resolve(__dirname, 'src'),
  entry: ['regenerator-runtime/runtime.js', './main.js'],
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json', '.img', '.png', '.jsx'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'src'),
      'c': path.resolve(__dirname, 'src/components'),
      'p': path.resolve(__dirname, 'src/pages'),
      's': path.resolve(__dirname, 'src/store'),
      'r': path.resolve(__dirname, 'src/router'),
      'f': path.resolve(__dirname, 'src/functions'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              ['@babel/plugin-proposal-private-methods', { 'loose': true }],
              ['@babel/plugin-proposal-class-properties', { 'loose': true }],
            ],
          },
        },
      },
      {
        test: /\.module\.scss$/i,
        use: [
          {
            loader: process.env.NODE_ENV !== 'development' ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]__[sha1:hash:hex:7]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /^((?!\.module).)*scss$/i,
        use: [
          {
            loader: process.env.NODE_ENV !== 'development' ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: process.env.NODE_ENV !== 'development' ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              publicPath: process.env.NODE_ENV === 'development' ? '/' : '/src',
              outputPath: 'font/',
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpe|jpg|svg)(\?.*$|$)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000,
              outputPath: 'img/',
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  devtool: process.env.NODE_ENV !== 'development' ? false : 'eval-cheap-module-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    overlay: true,
    proxy: {
      '/api': `http://localhost:${process.env.NODE_PORT || 3000}`,
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTML({
      template: '../index.html',
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
}

module.exports = conf
