const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const webpack = require('webpack');

process.env["NODE_CONFIG_DIR"] = __dirname + "/node_modules/@mazeapp/maze-api-core/config";
const config = require('config');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      //double stringify because node-config expects this to be a string
      'process.env.NODE_CONFIG': JSON.stringify(JSON.stringify(config)),
    }),
  ],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        include: __dirname,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
