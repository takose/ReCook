module.exports = {
  enforce: 'pre',
  test: /\.(ts|tsx)?(\.erb)?$/,
  exclude: /node_modules/,
  use: 'tslint-loader',
}
