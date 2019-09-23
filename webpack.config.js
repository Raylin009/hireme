const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "src/index.html",
  filename: "index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        include: `${__dirname}/src`,
        use: ['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [htmlPlugin]
};