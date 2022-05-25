const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "../src/index.ts"),
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: {
          target: 'es2015'  // Syntax to compile to (see options below for possible values)
        }
      },
    ]
  }
}