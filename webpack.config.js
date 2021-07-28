const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js'
  },
  optimization: {  
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,        
        })
      ],  
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              {
                plugins:['@babel/plugin-transform-runtime']
              }
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            // inject CSS to page
            loader: 'style-loader'
          }
          , {
            // translates CSS into CommonJS modules
            loader: 'css-loader'
          }, {
            // Run postcss actions
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          }, {
            // compiles Sass to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '空氣品質API_bootstrap-v5',
      template: './src/index.html',
      filename: 'main.html',
      minify: { 
        removeComments: true, // 移除註釋
        collapseWhitespace: true, 
        removeAttributeQuotes: true // 移除空格
      },
      chunks: ['vendor', 'app']
    }),
    new Dotenv() 
  ],
  devtool: "source-map",
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 5050,
    hot:true
  },

  // resolve: {
  //   fallback: {
  //     "path": require.resolve("path-browserify")
  //   }
  // }

}