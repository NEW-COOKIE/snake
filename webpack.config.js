const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      'chrome': '58',
                      'ie': '10'
                    },
                    'corejs': '3',
                    'useBuiltIns': 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ]
      },

      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  devtool: "inline-source-map",

  resolve: {
    extensions: ['.ts', '.js']
  }
}
