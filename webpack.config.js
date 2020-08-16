const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'responsive-table.min.js',
    library: 'ResponsiveTable',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
    ]
  }
}