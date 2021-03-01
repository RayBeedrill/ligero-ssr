const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin')

const siteData = require('./src/data');

// Возвращает true, если аргумент - путь к файлу с расширением,
// (тоесть оканчивается на .*).
function haveExt(path) {
  return /.*\.[^\.]+$/.test(path);
}


function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.filter(i => !i.startsWith('_')).map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/pages');
const outputPath = './dist';

module.exports = {
  entry: [
    './src/js/index.js',
    './src/sass/style.sass',
  ],
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, outputPath),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif|woff|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192, context: 'client', name: '[path][name].[ext]' }
          }
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false
              }],
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: [
          path.resolve(__dirname, 'src/sass')
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          { loader: 'resolve-url-loader', options: 'sourceMap' },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/includes'),
        use: ['raw-loader']
      },
      {
        test: /\.pug$/,
        use: [
          'html-loader?attrs=false',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: '  ',
              exports: false,
              debug: false,
              compileDebug: false,
              cache: true,
              data: siteData
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanPlugin(outputPath),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: "./css/style.bundle.css"
    }),
    new CopyWebpackPlugin([
      {
        from: './src/static',
        to: './static'
      }
    ]),
    ...htmlPlugins,
  ],
  devServer: {
    proxy: {
      // Запросы без расширения трактуем как запросы html файлов.
      '/': {
        bypass: function(req, res, proxyOptions) {
          if (!haveExt(req.path)) {
            return `${req.path}.html`;
          }
        }
      }
    }
  }
};