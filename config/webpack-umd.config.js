const path = require('path');
// const loaders = require('./loaders');
const plugins = require('./plugins');

const include = path.join(__dirname, 'src');
const nodeENV = process.env.NODE_ENV;

// eslint-disable-next-line no-console
console.log(nodeENV);

const webpackConfig = {
  mode: nodeENV !== 'development' ? 'production' : 'development',
  // target: nodeENV === 'test' ? 'node' : 'web',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'spotifyWrapper',
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
      include: [include],
    }],
  },
};

module.exports = webpackConfig;
