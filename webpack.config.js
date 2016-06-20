var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  }
};
