const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // use: [
        //   {
        //     loader: "style-loader" // creates style nodes from JS strings
        //   },
        //   {
        //     loader: "css-loader" // translates CSS into CommonJS
        //   },
        //   {
        //     loader: "sass-loader" // compiles Sass to CSS
        //   }
        // ]
      }
    ]
  }
}
