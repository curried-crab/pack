import * as path from "path";

import _ from "lodash"
import { fileURLToPath } from "url"

// const test = require("./test")


// console.log("--->", _.isArray([]))
// test.test()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: path.resolve(__dirname, "../src/index.js"),
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx|js|jsx)?$/,
      //   loader: "esbuild-loader",
      //   exclude: /node_modules/,
      //   options: {
      //     target: "es2015", // Syntax to compile to (see options below for possible values)
      //   },
      // },
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", {
              modules: "commonjs"
            }]
          ]
        },
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
};
